<script>
  import { mute } from "../store";

  function toggleMute() {
    mute.set(!$mute);
  }

  $: {
    $mute;
    console.log("Test value changed to:", $mute);
  }
</script>

<button on:click={toggleMute}>{$mute ? "unmute" : "mute"}</button>
