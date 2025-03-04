<script lang="ts">
  import { mute, attempts, displayScore, characterFilter } from "../store";
  import katakana from "../../assets/data/katakana.json";
  import ScoreCard from "../scorecard/ScoreCard.svelte";
  import "./game.scss";

  let characters: Record<string, string>;
  let allKana: string[];
  let kanaKeys: string[];

  $: {
    characters = Object.assign(
      {},
      ...Object.keys(katakana)
        .filter((key) => $characterFilter[key as keyof typeof katakana])
        .map((key) => katakana[key as keyof typeof katakana])
    );
    allKana = Object.keys(characters);

    if (inputElement) {
      inputElement.focus();
    }

    if (correctAudio) {
      const volume = $mute ? 0 : 1;
      correctAudio.volume = volume;
      tryAgainAudio.volume = volume;
      failedAudio.volume = volume;
    }
  }

  let previousKana: string[] = [];
  $: {
    if (JSON.stringify(allKana) !== JSON.stringify(previousKana)) {
      previousKana = [...allKana];
      loadGame(allKana);
    }
  }
  // char level
  let userInput: string;
  let inputElement: HTMLElement;
  let result: string;
  let resultStatus: boolean;
  let attempt: number;
  let randomKana: keyof typeof characters;

  // game level
  let currentKanaIndex: number;
  let incorrectKana: string[];

  // sound effects
  let correctAudio: HTMLAudioElement;
  let tryAgainAudio: HTMLAudioElement;
  let failedAudio: HTMLAudioElement;

  function displayResult(isGood: boolean = true, message?: string) {
    result = message || isGood ? "Correct!" : "Try Again!";
    resultStatus = isGood;
    setTimeout(() => {
      result = "";
    }, 500);
  }

  function shuffle(list: string[]) {
    for (let i = 0; i < list.length; i++) {
      const j = i + Math.floor(Math.random() * (list.length - i));
      let temp = list[j];
      list[j] = list[i];
      list[i] = temp;
    }
    return list;
  }

  function loadGame(characters: string[]) {
    kanaKeys = shuffle(characters);
    currentKanaIndex = 0;
    incorrectKana = [];
    loadCharacter();
  }

  function loadCharacter() {
    randomKana = kanaKeys[currentKanaIndex] as keyof typeof characters;
    userInput = "";
    attempt = $attempts;
  }

  function checkAnswer() {
    if (userInput === characters[randomKana]) {
      // Correct!
      correctAudio.play();
      displayResult();
      currentKanaIndex++;
      loadCharacter();
    } else {
      attempt--;
      if (attempt == 0) {
        // failed
        failedAudio.play();
        incorrectKana.push(randomKana);
        currentKanaIndex++;
        setTimeout(loadCharacter, 500);
      } else {
        // incorrect with attempts left
        tryAgainAudio.play();
        displayResult(false);
      }
    }
    // always
    userInput = "";
    inputElement.focus();
  }
</script>

<audio src="/audio/sound-effects/correct.wav" bind:this={correctAudio}></audio>
<audio src="/audio/sound-effects/try-again.wav" bind:this={tryAgainAudio}
></audio>
<audio src="/audio/sound-effects/failed.wav" bind:this={failedAudio}></audio>

<div class="game">
  {#if currentKanaIndex === kanaKeys.length}
    <!-- condition for if you get all of it, play a cute little party animation -->
    <div class="incorrect-screen">
      <h1>incorrect guesses:</h1>
      <p>{incorrectKana.toString()}</p>
      <button on:click={() => loadGame(incorrectKana)}
        >Play Again With Incorrect Kana</button
      >
      <button on:click={() => loadGame(allKana)}
        >Play Again with all Kana</button
      >
    </div>
  {:else}
    <h1>{randomKana}</h1>
    {#if attempt > 0}
      <p class="dots">
        {Array.from({ length: attempt })
          .map(() => "•")
          .join("")}
      </p>
      <form on:submit|preventDefault={checkAnswer}>
        <input type="text" bind:value={userInput} bind:this={inputElement} />
      </form>
      <p class={`result ${resultStatus}`}>{result}</p>
    {:else}
      <p class="fail">
        I was <strong>{characters[randomKana]}</strong>!
      </p>
    {/if}
  {/if}

  {#if $displayScore}
    <ScoreCard
      totalCharacters={kanaKeys}
      incorrectCount={incorrectKana}
      currentCharacter={currentKanaIndex}
    />
  {/if}
</div>
