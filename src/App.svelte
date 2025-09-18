<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Game.svelte";
  import Learn from "./pages/Learn.svelte";

  const routes = {
    "/": Home,
    "/learn": Learn,
    "*": Home,
  };
</script>

<nav>
  <a href="/">Home</a>
  <a href="/learn">Learn</a>
</nav>

<Router {routes} />
