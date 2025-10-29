<script>
  import Router from "svelte-spa-router";
  import Navigation from "./lib/nav/Navigation.svelte";
  import Home from "./pages/game/Game.svelte";
  import Keyboard from "./lib/keyboard/Keyboard.svelte";
  import Learn from "./pages/learn/Learn.svelte";

  const routes = {
    "/": Home,
    "/learn": Learn,
    "/keyboard": Keyboard,
    "*": Home,
  };
</script>

<Navigation />
<Router {routes} useHash={false} />
