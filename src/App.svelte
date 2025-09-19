<script>
  import Router, { link } from "svelte-spa-router";
  import Home from "./pages/Game.svelte";
  import Learn from "./pages/Learn.svelte";

  const routes = {
    "/": Home,
    "/learn": Learn,
    "*": Home,
  };
</script>

<nav>
  <a href="/" use:link>Home</a>
  <a href="/learn" use:link>Learn</a>
</nav>

<Router {routes} useHash={false} />
