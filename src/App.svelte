<script lang="ts">
  import katakana from "./assets/data/katakana.json";
  const allKana = Object.keys(katakana);

  let kanaKeys: string[];

  // char level
  let userInput: string;
  let inputElement: HTMLElement;
  let result: string;
  let attempt: number;
  let randomKana: keyof typeof katakana;

  // game level
  let currentKanaIndex: number;
  let incorrectKana: string[];

  // sound effects
  let correctAudio: HTMLAudioElement;

  loadGame(allKana);

  $: {
    if (inputElement) {
      inputElement.focus();
    }
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
    randomKana = kanaKeys[currentKanaIndex] as keyof typeof katakana;
    userInput = "";
    attempt = 3;
  }

  function checkAnswer() {
    if (userInput === katakana[randomKana]) {
      // Correct!
      correctAudio.play();
      result = "Correct!";
      setTimeout(() => {
        result = "";
      }, 500);
      currentKanaIndex++;
      loadCharacter();
    } else {
      attempt--;
      if (attempt == 0) {
        // failed
        incorrectKana.push(randomKana);
        currentKanaIndex++;
        setTimeout(loadCharacter, 500);
      } else {
        // incorrect with attempts left
        result = "Try Again!";
        setTimeout(() => {
          result = "";
        }, 500);
      }
    }
    // always
    userInput = "";
    inputElement.focus();
  }
</script>

<audio src="/audio/sound-effects/correct.wav" bind:this={correctAudio}></audio>

<main>
  {#if currentKanaIndex === allKana.length}
    <!-- condition for if you get all of it, play a cute little party animation -->
    <h1>incorrect guesses:</h1>
    <p>{incorrectKana.toString()}</p>
    <button on:click={() => loadGame(incorrectKana)}
      >Play Again With Incorrect Kana</button
    >
    <button on:click={() => loadGame(allKana)}>Play Again with all Kana</button>
  {:else}
    <h1>{randomKana}</h1>
    {#if attempt > 0}
      <p>
        {Array.from({ length: attempt })
          .map(() => "•")
          .join("")}
      </p>
      <form on:submit|preventDefault={checkAnswer}>
        <input type="text" bind:value={userInput} bind:this={inputElement} />
      </form>
      <p>{result}</p>
    {:else}
      <p class="fail">
        I was <strong>{katakana[randomKana]}</strong>!
      </p>
    {/if}
  {/if}
</main>
