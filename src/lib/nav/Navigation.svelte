<script>
  import { link } from "svelte-spa-router";
  import Home from "../../pages/game/Game.svelte";
  import Learn from "../../pages/learn/Learn.svelte";
  import { isDarkMode } from "../../lib/store";
  import "./navigation.scss";

  const routes = {
    "/": Home,
    "/learn": Learn,
    "*": Home,
  };
</script>

<nav class:dark-mode={$isDarkMode}>
  <a href="/" use:link>Home</a>
  <a href="/learn" use:link>Learn</a>
</nav>
