<script lang="ts">
  import {
    mute,
    font,
    attempts,
    displayScore,
    characterFilter,
    isDarkMode,
    isHiragana,
    doNotAskAgain,
  } from "../store";
  import { writable } from "svelte/store";
  import Confirmation from "../confirmation/Confirmation.svelte";
  import "./settings.scss";

  let displaySettings = writable(false);
  let settingsContainer: HTMLElement;
  let settingsButton: HTMLElement;
  let confirmationPopup: HTMLElement;

  let confirmationMsg = writable<string>();
  let displayConfirmation = writable(false);
  let result = writable<boolean | null>(null);

  const maxAttempts = 5;
  const minAttempts = 1;

  function handleClickOutside(event: MouseEvent | TouchEvent) {
    const target = event.target as Node;
    if (
      settingsContainer &&
      !settingsContainer.contains(target) &&
      settingsButton &&
      !settingsButton.contains(target) &&
      (!confirmationPopup || !confirmationPopup.contains(target))
    ) {
      displaySettings.set(false);
    }
  }

  $: {
    if ($displaySettings) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, {
        passive: true,
      });
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
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

  async function onFilterChange(event: Event, character: string) {
    const target = event.target as HTMLInputElement;
    const { checked } = target;

    if (!$doNotAskAgain) {
      displayConfirmation.set(true);
      result.set(null);

      confirmationMsg.set(
        `Are you sure you want to ${checked ? "enable" : "disable"} ${character} characters?
        This will restart your game.`
      );

      await new Promise<void>((resolve) => {
        const unsubscribe = result.subscribe((value) => {
          if (value !== null) {
            unsubscribe();
            resolve();
          }
        });

        const closeListener = (event: MouseEvent | TouchEvent) => {
          if (
            confirmationPopup &&
            !confirmationPopup.contains(event.target as Node)
          ) {
            result.set(false);
          }
        };

        const keyListener = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            result.set(false);
          }
        };

        document.addEventListener("click", closeListener);
        document.addEventListener("touchstart", closeListener, {
          passive: true,
        });
        document.addEventListener("keydown", keyListener, { once: true });
        result.subscribe((value) => {
          if (value !== null) {
            document.removeEventListener("click", closeListener);
            document.removeEventListener("touchstart", closeListener);
            document.removeEventListener("keydown", keyListener);
          }
        });
      });
    } else {
      result.set(true);
    }

    if ($result === true) {
      $characterFilter[character] = checked;
      if (Object.values($characterFilter).every((i) => !i)) {
        $characterFilter[character] = true;
        target.checked = !checked;
        console.log("TODO: error the user!");
      }
    } else {
      target.checked = !checked;
    }

    displayConfirmation.set(false);
  }

  function handleAttemptInput(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = parseInt(target.value);
    if (isNaN(value) || target.value === "") {
      return;
    }

    if (value > maxAttempts) {
      value = maxAttempts;
      target.value = value.toString();
      console.log("TODO: error the user!");
    } else if (value < minAttempts) {
      value = minAttempts;
      target.value = value.toString();
      console.log("TODO: error the user!");
    }

    attempts.set(value);
  }

  function handleAttemptBlur(event: Event) {
    const target = event.target as HTMLInputElement;
    let value = parseInt(target.value);
    if (isNaN(value) || target.value === "") {
      value = minAttempts;
      target.value = value.toString();
      attempts.set(value);
      console.log("TODO: error the user!");
    }
  }

  function handleAttemptFocus(event: Event) {
    const target = event.target as HTMLInputElement;
    target.setAttribute("inputmode", "numeric");
    target.setAttribute("pattern", "[0-9]*");
  }

  async function toggleHiragana(event: Event) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    if (!$doNotAskAgain) {
      displayConfirmation.set(true);
      result.set(null);

      confirmationMsg.set(
        `Are you sure you want to switch to ${checked ? "hiragana" : "katakana"}?
      This will restart your game.`
      );

      await new Promise<void>((resolve) => {
        const unsubscribe = result.subscribe((value) => {
          if (value !== null) {
            unsubscribe();
            resolve();
          }
        });

        const closeListener = (event: MouseEvent | TouchEvent) => {
          if (
            confirmationPopup &&
            !confirmationPopup.contains(event.target as Node)
          ) {
            result.set(false);
          }
        };

        const keyListener = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            result.set(false);
          }
        };

        document.addEventListener("click", closeListener);
        document.addEventListener("touchstart", closeListener, {
          passive: true,
        });
        document.addEventListener("keydown", keyListener, { once: true });
        result.subscribe((value) => {
          if (value !== null) {
            document.removeEventListener("click", closeListener);
            document.removeEventListener("touchstart", closeListener);
            document.removeEventListener("keydown", keyListener);
          }
        });
      });
    } else {
      result.set(true);
    }

    if ($result === true) {
      isHiragana.set(checked);
    } else {
      target.checked = $isHiragana;
    }

    displayConfirmation.set(false);
  }

  function handleButtonTouch(event: TouchEvent) {
    event.preventDefault();
  }
</script>

{#if displayConfirmation}
  <div bind:this={confirmationPopup}>
    <Confirmation
      {result}
      display={displayConfirmation}
      notShowAgain={doNotAskAgain}>{$confirmationMsg}</Confirmation
    >
  </div>
{/if}

<div class="settings-container">
  <button
    bind:this={settingsButton}
    on:click={() => displaySettings.set(!$displaySettings)}
    on:touchend|preventDefault={() => displaySettings.set(!$displaySettings)}
    id="display-settings"
    name="display-settings"
  >
    <span class="material-symbols-rounded">settings</span></button
  >

  {#if $displaySettings}
    <div bind:this={settingsContainer} class="settings-popup">
      <div class="settings-buttons">
        <button on:click={toggleMute} on:touchend|preventDefault={toggleMute}>
          <span class="material-symbols-rounded"
            >volume_{$mute ? `off` : "up"}</span
          >
        </button>
        <button
          on:click={toggleDarkMode}
          on:touchend|preventDefault={toggleDarkMode}
        >
          <span class="material-symbols-rounded"
            >{$isDarkMode ? `light` : "dark"}_mode</span
          >
        </button>
      </div>
      <button
        on:click={toggleDisplayScore}
        on:touchend|preventDefault={toggleDisplayScore}
        id="score-button"
      >
        {$displayScore ? "hide" : "show"} score
      </button>

      <div class="setting-field">
        <label for="attempts">attempts:</label>
        <input
          name="attempts"
          id="attempts"
          value={$attempts}
          on:input={handleAttemptInput}
          on:blur={handleAttemptBlur}
          on:focus={handleAttemptFocus}
          type="number"
          inputmode="numeric"
          pattern="[0-9]*"
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
              class="toggle"
              checked={$characterFilter[character]}
              on:change={(event) => onFilterChange(event, character)}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
