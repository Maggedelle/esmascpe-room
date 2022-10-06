<script>
  export let item;
  export let onClose;
  export let cracked;
  export let socket;
  export let team;

  let pass = [
    "esma vinder beerpong",
    "esmavinderbeerpong",
    "esma vinder beer pong",
  ];
  //let pass = ["esma vinder beerpong"];
  let passInput = "";
  let showPassContainer = false;
  function onPassEnter() {
    if (pass.includes(passInput.toLowerCase())) {
      let audio = new Audio("/unlock_sound.mp3");
      audio.play();
      cracked = true;
      socket.send(
        JSON.stringify({
          type: "team-finish",
          data: team,
        })
      );
    } else {
      passInput = "";
      let audio = new Audio("/fail_sound.mp3");
      audio.play();
    }
  }
</script>

<div>
  <div class="base">
    <div class="close" on:click={onClose}>X</div>
    {#if !showPassContainer}
      <div class="header">KONTRAKT</div>
      <div class="baseText">
        1. I skal være mega kedelige <br />
        2. I skal være grå ik grøn <br />
        3. I skal styre jer med alt det papvin <br />
        4. I må ikke tage næsebajere
      </div>
      <button class="button" on:click={() => (showPassContainer = true)}
        >SLET!!</button
      >
    {:else}
      Skriv Adgangskode
      <input bind:value={passInput} type="password" />
      <button class="button" on:click={onPassEnter}>Slet</button>
    {/if}
  </div>
  {#if cracked}
    <div class="modal-overlay">
      <div class="modal">
        <h1 class="victory">Victory</h1>
        <img src="https://media.tenor.com/vxFNoJHV3I4AAAAC/chiquichico.gif" />
        <p class="victoryText">
          Tillykke! Alphabet kontrakten er hermed revet i stykker. ESMA er frie
          igen!
        </p>
      </div>
    </div>
  {/if}
</div>

<style>
  .base {
    background-color: white;
    position: fixed;
    display: flex;
    bottom: -5rem;
    left: 5rem;
    min-width: 50rem;
    min-height: 50rem;
    cursor: auto;
    flex-direction: column;
    align-items: center;
  }
  .close {
    cursor: pointer;
    margin-left: 48rem;
    margin-top: 1rem;
    font-size: 2rem;
  }
  .header {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 5rem;
  }
  .baseText {
    margin-bottom: 50px;
  }
  .button {
    min-width: 250px;
    min-height: 100px;
    background-color: red;
    font-size: 40px;
  }

  .modal-overlay {
    position: fixed;
    cursor: default;
    top: -1;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: transparent;
  }

  .modal {
    text-align: center;
    background-image: linear-gradient(red, orange, yellowgreen, blue);
    height: 50rem;
    width: 80rem;
    border-radius: 20px;
  }

  .victory {
    color: yellowgreen;
    font-weight: bold;
    font-size: 100px;
    padding-bottom: 3rem;
  }

  .victoryText {
    padding-top: 8rem;
    color: red;
    font-weight: bold;
    font-size: 30px;
  }
</style>
