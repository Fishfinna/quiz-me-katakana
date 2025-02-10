<script lang="ts">
  import { mute, attempts } from "../store";

  $: {
    console.log("Mute status:", $mute);
    console.log("Attempts count:", attemptsLocal);
  }

  function toggleMute() {
    mute.update((value) => !value);
  }
  let attemptsLocal = $attempts;
</script>

<button on:click={toggleMute}>{$mute ? "Unmute" : "Mute"}</button>
<input bind:value={attemptsLocal} type="number" />
