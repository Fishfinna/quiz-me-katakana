<script lang="ts">
  import {
    mute,
    font,
    attempts,
    displayScore,
    characterFilter,
    isDarkMode,
    isHiragana,
  } from "../store";
  import { writable } from "svelte/store";
  import "./settings.scss";

  let displaySettings = writable(false);
  let settingsContainer: HTMLElement;
  let settingsButton: HTMLElement;
  const maxAttempts = 5;
  const minAttempts = 1;

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

  function onFilterChange(event: Event, character: string) {
    const target = event.target as HTMLInputElement;
    const { checked } = target;

    let userConfirmed = confirm("Are you sure you want to continue?");
    if (userConfirmed) {
      $characterFilter[character] = checked;
      if (Object.values($characterFilter).every((i) => !i)) {
        $characterFilter[character] = true;
        target.checked = !checked;
        console.log("TODO: error the user!");
      }
    } else {
      target.checked = !checked;
    }
  }

  function handleAttemptUpdate() {
    if ($attempts > maxAttempts) {
      attempts.set(maxAttempts);
      console.log("TODO: error the user!");
    }

    if ($attempts < minAttempts) {
      attempts.set(minAttempts);
      console.log("TODO: error the user!");
    }

    if (!$attempts) {
      attempts.set(minAttempts);
      console.log("TODO: error the user!");
    }
  }

  function toggleHiragana(event: Event) {
    const target = event.target as HTMLInputElement;
    let userConfirmed = confirm("Are you sure you want to continue?");

    if (userConfirmed) {
      isHiragana.set(!$isHiragana);
      target.checked = !$isHiragana;
    }

    target.checked = $isHiragana;
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
      <div class="settings-buttons">
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
      </div>
      <button on:click={toggleDisplayScore} id="score-button"
        >{$displayScore ? "hide" : "show"} score</button
      >
      <div class="setting-field">
        <label for="attempts">attempts:</label>
        <input
          name="attempts"
          id="attempts"
          bind:value={$attempts}
          on:change={handleAttemptUpdate}
          on:blur={handleAttemptUpdate}
          type="number"
          min={minAttempts}
          max={maxAttempts}
        />
      </div>

      <div class="setting-field">
        <label for="font">font:</label>
        <select bind:value={$font}>
          <option>mono</option>
          <option>serif</option>
          <option>handwriting</option>
        </select>
      </div>

      <h4>Script:</h4>
      <div class="hiragana-toggle">
        <input
          type="checkbox"
          id="is-hiragana-checkbox"
          checked={$isHiragana}
          on:change={toggleHiragana}
        />
        <label for="is-hiragana-checkbox" class="toggle-label"
          >{$isHiragana ? "hiragana" : "katakana"}</label
        >
      </div>

      <div class="include-options">
        <h4>Include:</h4>
        {#each Object.keys($characterFilter) as character}
          <div class="include-option">
            <label for="{character}-checkbox">
              {character}:
            </label>
            <input
              type="checkbox"
              id="{character}-checkbox"
              checked={$characterFilter[character]}
              on:change={(event) => onFilterChange(event, character)}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
