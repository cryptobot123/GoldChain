<script>
    import { ethStore, web3, selectedAccount, connected } from "$lib/web3";
    import { contractAbi, contractAddress } from "$lib/contract-info";

    export let referralAddress;
    let transactionHash = "";

    const getAirdrop = async () => {
        if(referralAddress === "0x0000000000000000000000000000000000000000")
        {
            alert(`Required referralAddress!`);
            return;
        }

        await ethStore.setBrowserProvider();
        const web3Contract = new $web3.eth.Contract(contractAbi, contractAddress);
        const tx = await web3Contract.methods
            .getAirdrop(referralAddress)
            .send({ from: $selectedAccount })
            .catch((e) => console.log(e));

        tx && (transactionHash = tx.transactionHash);
    };
</script>

<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"></script>
</svelte:head>

<div>
    <div class="form-group">
        <button class={"btn btn-ico btn-block"} on:click={getAirdrop}> Claim Airdrop </button>
    </div>
    {#if transactionHash}
        <p>Transaction receipt: {transactionHash}</p>
    {/if}
</div>
