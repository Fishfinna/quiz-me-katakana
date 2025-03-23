<script>
  import "./confirmation.scss";
</script>

<div class="overlay"></div>
<div class="confirmation">
  <p class="warning-message"><slot /></p>
  <div class="require-confirmation">
    <label for="require-confirmation">Do not ask this again:</label>
    <input id="require-confirmation" type="checkbox" class="toggle" />
  </div>
  <button>Confirm</button>
  <button>Cancel</button>
</div>
