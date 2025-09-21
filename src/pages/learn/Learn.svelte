<script>
  import { isDarkMode } from "../../lib/store";
  import Hiragana from "../../assets/data/hiragana.json";
  import Katakana from "../../assets/data/katakana.json";
  import "./learn.scss";
</script>

<main class:dark-mode={$isDarkMode}>
  <h1>Learn Page</h1>
  <h2>Hiragana</h2>
  <div>{JSON.stringify(Hiragana)}</div>
  <hr />
  <h2>Katakana</h2>
  <div>{JSON.stringify(Katakana)}</div>
</main>
