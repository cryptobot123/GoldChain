import { derived, writable } from "svelte/store";

const getGlobalObject = () => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw new Error("cannot find the global object");
};

let Web3 = {};

export const loadWeb3 = () => {
    if (Web3.version) {
        return;
    }

    try {
        Web3 = getGlobalObject().Web3 || {};
    } catch (err) {
        console.error("no globalThis.Web3 object");
    }
};

export const getWindowBinance = () => {
    try {
        if (getGlobalObject().ethereum) {
            return getGlobalObject().ethereum;
        }
    } catch (err) {
        console.error("no globalThis.ethereum object");
    }
};

const chain = (id) => {
    if (!id || !Web3.utils) {
        return {};
    }

    if (Web3.utils.isHexStrict(id)) {
        id = Web3.utils.hexToNumber(id);
    }

    var binanceChain = {
        name: "Binance Smart Chain Mainnet",
        chainId: 56,
    };

    return binanceChain.chainId === id ? binanceChain : {};
};

export const createStore = () => {
    const { subscribe, set } = writable({
        connected: false,
        accounts: [],
    });

    const init = () => {
        loadWeb3();

        if (!Web3.version) {
            throw new Error("Cannot find Web3");
        }

        const provider = getWindowBinance();
        provider && (provider.autoRefreshOnNetworkChange = false);
    };

    const setBrowserProvider = async () => {
        init();

        if (!getWindowBinance()) {
            throw new Error("Please authorized browser extension (Metamask or similar)");
        }

        const provider = getWindowBinance();
        const res = await provider.request({ method: "eth_requestAccounts" });
        provider.on("accountsChanged", setBrowserProvider);
        provider.on("chainChanged", setBrowserProvider);
        set({
            provider: provider,
            providerType: "Browser",
            connected: true,
            chainId: provider.chainId,
            accounts: res,
            instance: new Web3(provider),
        });
    };

    const setWatchAsset = async ({ address, symbol, decimals, image }) => {
        init();

        if (!getWindowBinance()) {
            throw new Error("Please authorized browser extension (Metamask or similar)");
        }

        const provider = getWindowBinance();
        const res = await provider.request({
            method: "wallet_watchAsset",
            params: {
                type: "ERC20",
                options: {
                    address: address,
                    symbol: symbol,
                    decimals: decimals,
                    image: image,
                },
            },
        });
    };

    return {
        setBrowserProvider,
        setWatchAsset,
        subscribe,
    };
};

export const ethStore = createStore();

export const connected = derived(ethStore, ($ethStore) => $ethStore.connected);

export const selectedAccount = derived(ethStore, ($ethStore) => ($ethStore.accounts.length ? Web3.utils.toChecksumAddress($ethStore.accounts[0]) : null));

export const providerType = derived(ethStore, ($ethStore) => $ethStore.providerType);
export const chainId = derived(ethStore, ($ethStore) => $ethStore.chainId);

export const chainName = derived(ethStore, ($ethStore) => chain($ethStore.chainId).name);

export const walletType = derived(ethStore, ($ethStore) => {
    if (!$ethStore.provider) return null;
    if (typeof $ethStore.provider === "string") return $ethStore.provider;
    if ($ethStore.provider.isMetaMask) return "MetaMask (or compatible)";
    if ($ethStore.provider.isNiftyWallet) return "Nifty";
    if ($ethStore.provider.isTrust) return "Trust";
    return "Unknown";
});

export const web3 = derived(ethStore, ($ethStore) => {
    if (!$ethStore.instance) return { ...Web3 };
    return $ethStore.instance;
});

loadWeb3();
