<script>
  import "./scoreCard.scss";

  export let totalCharacters;
  export let currentCharacter;
  export let incorrectCount;
</script>

<div class="score-card">
  <h3>Scorecard</h3>
  <p>total: {totalCharacters?.length}</p>
  <p>remain: {totalCharacters?.length - currentCharacter}</p>
  <p>
    incorrect: {incorrectCount?.length}
  </p>
  <p>correct: {currentCharacter - incorrectCount?.length}</p>
</div>
