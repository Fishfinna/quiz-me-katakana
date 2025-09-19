<script>
  import { isDarkMode } from "../lib/store";
  import Hiragana from "../assets/data/hiragana.json";
  import Katakana from "../assets/data/katakana.json";
</script>

<main class:dark-mode={$isDarkMode}>
  <h1>Learn Page</h1>
  <h2>Hiragana</h2>
  {JSON.stringify(Hiragana)}
  <hr />
  <h2>Katakana</h2>
  {JSON.stringify(Katakana)}
</main>
