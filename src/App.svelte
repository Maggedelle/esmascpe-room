<script>
  import Desktop from "./components/desktop.svelte";
  import Footer from "./components/footer.svelte";
  import Intro from "./components/intro.svelte";
  import Login from "./components/login.svelte";
  let currentScreen = "login";

  let backgroundType = "grey";

  let introDone = false;
</script>

{#if !introDone}
  <Intro onVideoEnded={() => (introDone = true)} />
{:else}
  <div class={backgroundType}>
    <div class="base">
      {#if currentScreen == "login"}
        <Login bind:currentScreen />
      {/if}
      {#if currentScreen == "desktop"}
        <Desktop bind:backgroundType />
      {/if}
      <Footer />
    </div>
  </div>
{/if}

<style>
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  .base {
  }

  .grey {
    background-color: grey;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .green {
    animation: 1s infinite alternate ease-out breathing-color--dark;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  @keyframes breathing-color--dark {
    from {
      background-color: lightgreen;
    }
    to {
      background-color: hsl(120, 85%, 38%);
    }
  }
</style>
