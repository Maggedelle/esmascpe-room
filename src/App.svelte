<script>
  import Desktop from "./components/desktop.svelte";
  import Footer from "./components/footer.svelte";
  import Login from "./components/login.svelte";
  let currentScreen = "login";

  let backgroundType = "grey";

  let playedIntro = false;
  let playingIntro = false;
  let disableIntro = false;

  function onKeyDown(event) {
    if (event.keyCode == 13 || event.keyCode == 32) playingIntro = true;
  }

  function onVideoEnded() {
    playingIntro = false;
    playedIntro = true;
  }
</script>

{#if playedIntro == false && playingIntro == false && disableIntro == false}
  <div class="beforeIntro">
    <div class="introText">Tryk 'Space' for at begynde</div>
  </div>
{:else if playingIntro == true && disableIntro == false}
  <div class="video-container">
    <video src="/EsmaIntro.mp4" autoplay={true} on:ended={onVideoEnded} />
  </div>
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
<svelte:window on:keydown|preventDefault={onKeyDown} />

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

  .beforeIntro {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .introText {
    color: white;
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    overflow-y: hidden;
  }

  .video-container video {
    /* Make video to at least 100% wide and tall */
    min-width: 100vh;
    min-height: 90vh;

    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
    width: auto;
    height: auto;

    /* Center the video */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
