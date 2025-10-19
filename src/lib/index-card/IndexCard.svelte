<script lang="ts">
  import "./indexCard.scss";
  export let japaneseCharacter;
  export let englishCharacter;
  const base = import.meta.env.BASE_URL == "/" ? "" : import.meta.env.BASE_URL;
  function playSound(character: string) {
    const audio = new Audio(
      `${base}/audio/kanasounds/kanasound-${character}.mp3`
    );
    audio.play().catch((err) => console.error("Audio playback failed", err));
  }
</script>

<button
  class="index-card"
  onclick={() => {
    playSound(englishCharacter);
  }}
>
  <p>{japaneseCharacter}</p>
  <p>{englishCharacter}</p>
</button>
