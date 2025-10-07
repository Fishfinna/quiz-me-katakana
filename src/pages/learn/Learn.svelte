<script>
  import { isDarkMode } from "../../lib/store";
  import Hiragana from "../../assets/data/hiragana.json";
  import Katakana from "../../assets/data/katakana.json";
  import "./learn.scss";
  import IndexCard from "../../lib/index-card/IndexCard.svelte";

  const alphabets = { Hiragana, Katakana };
</script>

<main class:dark-mode={$isDarkMode}>
  <h1 class="learn-title">Learn Page</h1>
  {#each Object.entries(alphabets) as [name, data], i}
    <h2>{name}</h2>
    <div>
      {#each Object.entries(data) as [key, values]}
        <div>
          <strong>{key}</strong>:
          <div class="character-lists">
            {#each Object.entries(values) as [japanese, english]}
              <IndexCard
                japaneseCharacter={japanese}
                englishCharacter={english}
              />
            {/each}
          </div>
        </div>
      {/each}
    </div>
    {#if i < Object.keys(alphabets).length - 1}
      <hr />
    {/if}
  {/each}

  <a
    href="https://www.learn-japanese-adventure.com/learn-to-speak-japanese-online.html"
    >Audio source here!</a
  >
</main>
