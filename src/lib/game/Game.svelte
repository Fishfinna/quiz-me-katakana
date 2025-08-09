<script lang="ts">
  import {
    mute,
    attempts,
    displayScore,
    characterFilter,
    font,
    isHiragana,
  } from "../store";
  import katakana from "../../assets/data/katakana.json";
  import hiragana from "../../assets/data/hiragana.json";
  import ScoreCard from "../scorecard/ScoreCard.svelte";
  import confetti from "canvas-confetti";
  import "./game.scss";

  let characters: Record<string, string>;
  let allKana: string[];
  let kanaKeys: string[];
  let confettiFired = false;

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
  let yippeeAudio: HTMLAudioElement;

  $: {
    const script: Record<string, Record<string, string>> = $isHiragana
      ? hiragana
      : katakana;
    characters = Object.assign(
      {},
      ...Object.keys(script)
        .filter((key) => $characterFilter[key])
        .map((key) => script[key])
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
      yippeeAudio.volume = $mute ? 0 : 0.05;
    }
  }

  let previousKana: string[] = [];
  $: {
    if (JSON.stringify(allKana) !== JSON.stringify(previousKana)) {
      previousKana = [...allKana];
      loadGame(allKana);
    }
  }

  function celebrate() {
    confettiFired = true;
    confetti();
    confettiFired = false;
    yippeeAudio.play();
  }

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
    if (userInput.toLowerCase() == "nn") userInput = "n";
    if (userInput.toLowerCase() === characters[randomKana].toLowerCase()) {
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
        setTimeout(loadCharacter, 600);
        setTimeout(() => currentKanaIndex++, 500);
      } else {
        // incorrect with attempts left
        tryAgainAudio.play();
        displayResult(false);
      }
    }
    if (
      currentKanaIndex === kanaKeys?.length &&
      incorrectKana.length === 0 &&
      !confettiFired
    ) {
      celebrate();
    }
    // always
    userInput = "";
    inputElement.focus();
  }
</script>

<audio src="./audio/correct.wav" bind:this={correctAudio}></audio>
<audio src="./audio/try-again.wav" bind:this={tryAgainAudio}></audio>
<audio src="./audio/failed.wav" bind:this={failedAudio}></audio>
<audio src="./audio/yippee.mp3" bind:this={yippeeAudio}></audio>

<div class="game">
  {#if currentKanaIndex === kanaKeys.length}
    <div class="ending-screen">
      {#if !incorrectKana.length}
        <h1>Congratulations, you got everything right!</h1>
        <p>
          This is Wooper.<br /> Wooper is proud of how far you have come and how
          much you have accomplished.
        </p>
        <img src="./gif/wooper.gif" alt="wooper" width="50" />
        {#if $attempts > 1}
          <p>Want to make it harder? Try with less attempts!:</p>
          <button
            on:click={() => {
              attempts.set(1);
              loadGame(allKana);
            }}>Play Again with less attempts</button
          >
        {/if}
      {:else}
        <h1>incorrect guesses:</h1>
        <p>{incorrectKana.toString()}</p>
        <button on:click={() => loadGame(incorrectKana)}
          >Play Again With Incorrect Kana</button
        >
      {/if}
      <button on:click={() => loadGame(allKana)}
        >Play Again with all Kana</button
      >
    </div>
  {:else}
    <h1 class="{$font}-font">{randomKana}</h1>
    {#if attempt > 0}
      <p class="dots">
        {Array.from({ length: attempt })
          .map(() => "•")
          .join("")}
      </p>
      <form on:submit|preventDefault={checkAnswer}>
        <input
          type="text"
          bind:value={userInput}
          bind:this={inputElement}
          autocorrect="off"
        />
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
