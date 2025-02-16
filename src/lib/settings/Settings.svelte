<script lang="ts">
  import { mute, attempts, displayScore } from "../store";
  import { writable } from "svelte/store";
  import "./settings.scss";

  let displaySettings = writable(false);
  let settingsContainer: HTMLElement;
  let settingsButton: HTMLElement;

  function handleClickOutside(event: MouseEvent) {
    if (
      settingsContainer &&
      !settingsContainer.contains(event.target as Node) &&
      settingsButton &&
      !settingsButton.contains(event.target as Node)
    ) {
      displaySettings.set(false);
    }
  }

  $: {
    if ($displaySettings) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
  }

  function toggleMute() {
    mute.update((value) => !value);
  }

  function toggleDisplayScore() {
    displayScore.update((value) => !value);
  }
</script>

<div class="settings-container">
  <button
    bind:this={settingsButton}
    on:click={() => displaySettings.set(!$displaySettings)}
    id="display-settings"
    name="display-settings">settings</button
  >

  {#if $displaySettings}
    <div bind:this={settingsContainer} class="settings-popup">
      <button on:click={toggleMute}>{$mute ? "Unmute" : "Mute"}</button>
      <input bind:value={$attempts} type="number" min="0" max="4" />
      <button on:click={toggleDisplayScore}
        >{$displayScore ? "hide" : "show"} score</button
      >
    </div>
  {/if}
</div>
