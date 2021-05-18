<script>
    import { ICO_ENDTIME } from "$lib/Env.svelte";
    
    let daysLeft = 0;
    let hoursLeft = 0;
    let minutesLeft = 0;
    let secondsLeft = 0;

    function makeTimer() {
        let now = new Date();
        let timeLeft = (ICO_ENDTIME.valueOf() - now.valueOf()) / 1000;
        daysLeft = Math.floor(timeLeft / 86400);
        hoursLeft = Math.floor((timeLeft - daysLeft * 86400) / 3600);
        minutesLeft = Math.floor((timeLeft - daysLeft * 86400 - hoursLeft * 3600) / 60);
        secondsLeft = Math.floor(timeLeft - daysLeft * 86400 - hoursLeft * 3600 - minutesLeft * 60);
    }

    makeTimer();

    setInterval(() => {
        makeTimer();
    }, 1000);

    $: hours = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
    $: minutes = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
    $: seconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
</script>

<div class="countdown my-4">
    <div class="row">
        <!--Append timer-->
        <div class="col"><div class="ico-time">{daysLeft} <span>Days</span></div></div>
        <div class="col"><div class="ico-time">{hours} <span>Hours</span></div></div>
        <div class="col"><div class="ico-time">{minutes} <span>Minuts</span></div></div>
        <div class="col"><div class="ico-time">{seconds} <span>Seconds</span></div></div>
    </div>
</div>
