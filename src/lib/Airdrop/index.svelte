<script>
    import { ethStore, web3, selectedAccount, connected } from "$lib/web3";
    import { contractAbi, contractAddress } from "$lib/contract-info";
    import { URL_TELEGRAM, URL_TWITTER } from "$lib/Env.svelte";

    export let referralAddress;
    let transactionHash = "";

    let socialSelected = "";
    let airdropClaimed = false;
    let telegramUsername = "";
    let twitterUsername = "";
    $: if (socialSelected) {
        telegramUsername = twitterUsername = "";
    };
    $: validTelegram = Boolean(telegramUsername?.trim());
    $: validTwitter = Boolean(twitterUsername?.trim());
    $: canGetAirdrop = !airdropClaimed && (validTelegram || validTwitter)

    const getAirdrop = async () => {
        if (referralAddress === "0x0000000000000000000000000000000000000000") {
            alert(`Invited by Wallet Address is Required!`);
            return;
        }

        await ethStore.setBrowserProvider();
        const web3Contract = new $web3.eth.Contract(contractAbi, contractAddress);
        const txTask = web3Contract.methods
            .getAirdrop(referralAddress)
            .send({ from: $selectedAccount })
            .catch((e) => console.log(e));

        airdropClaimed = true;

        const tx = await txTask;
        if(!tx) {
            airdropClaimed = false;
            return;
        }

        transactionHash = tx.transactionHash;
    };
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"></script>
</svelte:head>

<div>
    <div class="form-group">
        <button class={"btn btn-ico btn-block"} type="button" on:click={() => { socialSelected = "Telegram"; window.open(`${URL_TELEGRAM}`, '_blank'); }}> Join Telegram </button>
        <button class={"btn btn-ico btn-block"} on:click={() => { socialSelected = "Twitter"; window.open(`${URL_TWITTER}`, '_blank'); }}> Join Twitter </button>

        {#if socialSelected === "Telegram"}
            <input class={"form-control ico-form"} name="text" bind:value={telegramUsername} aria-label="Telegram Username" placeholder="Please enter your Telegram Username" />
        {:else if socialSelected === "Twitter"}
            <input class={"form-control ico-form"} name="text" bind:value={twitterUsername} aria-label="Twitter Username" placeholder="Please enter your Twitter Username" />
        {/if}

        <button class={"btn btn-ico btn-block"} disabled={!canGetAirdrop} on:click={getAirdrop}> CLAIM 1,000,000 GOLDCHAIN </button>
    </div>
    {#if transactionHash}
        <p>Transaction receipt: {transactionHash}</p>
    {/if}
</div>
