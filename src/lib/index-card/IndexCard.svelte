<script>
  import "./indexCard.scss";
  export let japaneseCharacter;
  export let englishCharacter;
</script>

<button
  class="index-card"
  onclick={() => {
    console.log(`kanasound-${englishCharacter}.mp3`);
  }}
>
  <p>{japaneseCharacter}</p>
  <p>{englishCharacter}</p>
</button>
