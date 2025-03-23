<script lang="ts">
  import { writable } from "svelte/store";
  import Confirmation from "./lib/confirmation/Confirmation.svelte";
  import Game from "./lib/game/Game.svelte";
  import Settings from "./lib/settings/Settings.svelte";
  import { isDarkMode } from "./lib/store";

  let displayConfirmation = writable(false);
  let result = writable<boolean | null>(null);
  let confirmationMsg = "Stop this?";

  $: if ($result) {
    console.log($result && !$displayConfirmation);
  }
</script>

<main class:dark-mode={$isDarkMode}>
  <Settings />
  <button
    on:click={() => {
      displayConfirmation.set(true);
      result.set(null);
    }}>test</button
  >
  {#if displayConfirmation}
    <Confirmation {result} display={displayConfirmation}
      >{confirmationMsg}</Confirmation
    >
  {/if}
  <Game />
</main>
