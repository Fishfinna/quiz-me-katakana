<script lang="ts">
  import { link, location } from "svelte-spa-router";
  import { isDarkMode } from "../../lib/store";
  import "./navigation.scss";
  function isActive(path: string): boolean {
    return $location === path || $location.startsWith(path + "/");
  }
</script>

<nav class:dark-mode={$isDarkMode}>
  <a href="/" use:link class:current={isActive("/")}>Home</a>
  <a href="/learn" use:link class:current={isActive("/learn")}>Learn</a>
</nav>
