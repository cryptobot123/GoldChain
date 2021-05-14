<script>
    import CopyToClipboard from "$lib/copyClipbloard.svelte";
    import { WEB_DOMAIN } from "$lib/Env.svelte";
    let address;
    $: referLink = `${WEB_DOMAIN || ""}/?ref=${address}`;
</script>

<div>
    <input name="text" class={"form-control ico-form"} bind:value={address} aria-label="Your BEP20 Address" placeholder="Your BEP20 Address" />

    {#if address}
        <p>Your refer link: {referLink}</p>
        <CopyToClipboard text={referLink} let:copy>
            <button on:click={copy}> Copy </button>
        </CopyToClipboard>
    {/if}
</div>
