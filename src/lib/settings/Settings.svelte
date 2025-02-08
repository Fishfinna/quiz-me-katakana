<script>
  import { test } from "../store";

  function updateContext() {
    test.set(Math.random());
  }

  $: {
    $test;
    console.log("Test value changed to:", $test);
  }
</script>

<button on:click={updateContext}>update setting</button>
