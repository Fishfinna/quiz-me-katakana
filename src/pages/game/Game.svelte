<script lang="ts">
  import "./game.scss";
  import Game from "../../lib/game/Game.svelte";
  import Settings from "../../lib/settings/Settings.svelte";
  import { isDarkMode } from "../../lib/store";
</script>

<main class:dark-mode={$isDarkMode}>
  <Settings />
  <Game />
</main>
