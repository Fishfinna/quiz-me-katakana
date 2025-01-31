<script lang="ts">
  import katakana from "./assets/data/katakana.json";

  const kanaKeys = Object.keys(katakana);
  let userInput: string;
  let inputElement: HTMLElement;
  let result: string;
  let attempt: number;
  let randomKana: keyof typeof katakana;

  $: {
    if (inputElement) {
      inputElement.focus();
    }
  }

  const load = () => {
    randomKana = kanaKeys[
      Math.floor(Math.random() * kanaKeys.length)
    ] as keyof typeof katakana;
    userInput = "";
    result = "";
    attempt = 3;
  };
  load();

  const checkAnswer = () => {
    if (userInput === katakana[randomKana]) {
      load();
    } else {
      result = "Try again!";
      attempt--;
      if (attempt == 0) {
        setTimeout(load, 800);
      }
    }
    userInput = "";
    inputElement.focus();
  };
</script>

<main>
  <h1>{randomKana}</h1>
  {#if attempt > 0}
    <form on:submit|preventDefault={checkAnswer}>
      <input type="text" bind:value={userInput} bind:this={inputElement} />
    </form>
    <p>{result}</p>
  {:else}
    <p>the answer was {katakana[randomKana]}!</p>
  {/if}
  <p>{attempt}</p>
</main>

<style lang="scss">
  main {
    text-align: center;
    font-family: Arial, sans-serif;
    position: relative;
    top: 20vh;
  }
</style>
