<script lang="ts">
  import { mute, attempts } from "../store";

  $: {
    console.log("Mute status:", $mute);
    console.log("Attempts count:", $attempts);
  }

  function toggleMute() {
    mute.update((value) => !value);
  }
</script>

<button on:click={toggleMute}>{$mute ? "Unmute" : "Mute"}</button>
<input bind:value={$attempts} type="number" min="0" max="4" />
