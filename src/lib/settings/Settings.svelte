<script lang="ts">
  import {
    mute,
    attempts,
    displayScore,
    characterFilter,
    isDarkMode,
  } from "../store";
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

  function toggleDarkMode() {
    isDarkMode.update((value) => !value);
  }
</script>

<div class="settings-container">
  <button
    bind:this={settingsButton}
    on:click={() => displaySettings.set(!$displaySettings)}
    id="display-settings"
    name="display-settings"
  >
    <span class="material-symbols-rounded">settings</span></button
  >

  {#if $displaySettings}
    <div bind:this={settingsContainer} class="settings-popup">
      <button on:click={toggleMute}
        ><span class="material-symbols-rounded"
          >volume_{$mute ? `off` : "up"}</span
        ></button
      >
      <button on:click={toggleDarkMode}
        ><span class="material-symbols-rounded"
          >{$isDarkMode ? `light` : "dark"}_mode</span
        ></button
      >
      <input bind:value={$attempts} type="number" min="0" max="4" />
      <button on:click={toggleDisplayScore}
        >{$displayScore ? "hide" : "show"} score</button
      >

      <div class="include-options">
        <h4>Include:</h4>
        {#each Object.keys($characterFilter) as character}
          <span
            >{character}:
            <input
              type="checkbox"
              bind:checked={$characterFilter[
                character as keyof typeof $characterFilter
              ]}
            /></span
          >
        {/each}
      </div>
    </div>
  {/if}
</div>
