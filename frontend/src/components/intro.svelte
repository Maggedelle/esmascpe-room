<script lang="ts">
  let playedIntro = false;
  let playingIntro = false;
  let disableIntro = true;

  export let socket;
  export let onVideoEnded;
  export let team;

  function onKeyDown(event) {
    if (
      event.keyCode == 49 ||
      event.keyCode == 50 ||
      event.keyCode == 51 ||
      event.keyCode == 52 ||
      event.keyCode == 53
    ) {
      team = event.keyCode;
      if (socket) {
        socket.send(JSON.stringify({ type: "team-init", data: team }));
      }
    } else if (event.keyCode == 13 || event.keyCode == 32) {
      if (disableIntro) onVideoEnded();
      else playingIntro = true;
    }
  }
</script>

{#if playedIntro == false && playingIntro == false}
  <div class="beforeIntro">
    <div class="introText">Tryk 'Space' for at begynde</div>
  </div>
{:else if disableIntro == false}
  <div class="video-container">
    <video src="/EsmaIntro.mp4" autoplay={true} on:ended={onVideoEnded} />
  </div>
{/if}

<svelte:window on:keydown|preventDefault={onKeyDown} />

<style>
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
</style>
