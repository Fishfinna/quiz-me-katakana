<script>
  import "./confirmation.scss";
  let { children, display, result } = $props();
</script>

{#if $display}
  <button aria-label="overlay" class="overlay" onclick={() => (display = false)}
  ></button>
  <div class="confirmation">
    <p class="warning-message">{@render children()}</p>
    <div class="require-confirmation">
      <label for="require-confirmation">Do not ask this again:</label>
      <input id="require-confirmation" type="checkbox" class="toggle" />
    </div>
    <button
      onclick={() => {
        result.set(true);
        display.set(false);
      }}>Confirm</button
    >
    <button
      onclick={() => {
        result.set(false);
        display.set(false);
      }}>Cancel</button
    >
  </div>
{/if}
