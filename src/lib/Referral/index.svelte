<script>
    import { selectedAccount } from "$lib/web3";
    import CopyToClipboard from "$lib/copyClipbloard.svelte";
    import { WEB_DOMAIN } from "$lib/Env.svelte";

    $: myReferAddress = $selectedAccount;
    $: referLink = `${WEB_DOMAIN || ""}/?ref=${myReferAddress}`;
</script>

<div>
    {#if myReferAddress}
        <p>Your refer link: {referLink}</p>
        <CopyToClipboard text={referLink} let:copy>
            <button on:click={copy}> Copy </button>
        </CopyToClipboard>
    {/if}
</div>
