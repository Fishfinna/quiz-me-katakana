<script lang="ts">
  import "./keyboard.scss";
  import katakana from "../../assets/data/katakana.json";
  import hiragana from "../../assets/data/hiragana.json";
  let userInput: string;
  let inputElement: HTMLElement;
</script>

<div class="keyboard">
  <h1>Keyboard</h1>
  <input
    type="text"
    bind:value={userInput}
    bind:this={inputElement}
    autocorrect="off"
  />
</div>
