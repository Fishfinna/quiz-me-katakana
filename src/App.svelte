<script lang="ts">
  import katakana from "./assets/data/katakana.json";
  const allKana = Object.keys(katakana);

  let kanaKeys: string[];
  let userInput: string;
  let inputElement: HTMLElement;
  let result: string;
  let attempt: number;
  let randomKana: keyof typeof katakana;

  let currentKanaIndex: number;
  let incorrectKana: string[];

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
      result = "Got It!";
      setTimeout(() => {
        result = "";
      }, 500);
      currentKanaIndex++;
      loadCharacter();
    } else {
      result = "Try again!";
      attempt--;
      if (attempt == 0) {
        incorrectKana.push(randomKana);
        currentKanaIndex++;
        setTimeout(loadCharacter, 500);
      }
    }
    userInput = "";
    inputElement.focus();
  }
</script>

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
      <form on:submit|preventDefault={checkAnswer}>
        <input type="text" bind:value={userInput} bind:this={inputElement} />
      </form>
      <p>{result}</p>
    {:else}
      <p>the answer was <strong>{katakana[randomKana]}</strong>!</p>
    {/if}
    <p>{attempt}</p>
  {/if}
</main>

<style lang="scss">
  main {
    text-align: center;
    font-family: Arial, sans-serif;
    position: relative;
    top: 20vh;
  }
</style>
