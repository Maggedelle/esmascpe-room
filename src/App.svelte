<script>
  import Desktop from "./components/desktop.svelte";
  import Footer from "./components/footer.svelte";
  import Login from "./components/login.svelte";

  let currentScreen = "login";
</script>

<div class="base">
  {#if currentScreen == "login"}
    <Login bind:currentScreen />
  {/if}
  {#if currentScreen == "desktop"}
    <Desktop />
  {/if}
  <Footer />
</div>

<style>
  .base {
  }
</style>
