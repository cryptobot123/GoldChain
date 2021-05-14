<script>
    import { ethStore, web3, selectedAccount, connected } from "$lib/web3";
    import { contractAbi, contractAddress } from "$lib/contract-info";

    export let referralAddress;
    let transactionHash = "";
    let buyAmount = 0.01;

    const buyToken = async () => {
        await ethStore.setBrowserProvider();
        const web3Contract = new $web3.eth.Contract(contractAbi, contractAddress);
        const tx = await web3Contract.methods
            .tokenSale(referralAddress)
            .send({ from: $selectedAccount, value: $web3.utils.toWei(`${buyAmount}`) })
            .catch((e) => console.log(e));

        tx && (transactionHash = tx.transactionHash);
    };
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"></script>
</svelte:head>

<div>
    <input type="number" min="0.01" bind:value={buyAmount} aria-label="BNB" placeholder="BNB amount" />
    <button on:click={buyToken}> Buy Token </button>

    {#if transactionHash}
        <p>Transaction receipt: {transactionHash}</p>
    {/if}
</div>
