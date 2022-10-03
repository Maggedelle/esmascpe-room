<script>
  import Image from "./image.svelte";
  import Audioplayer from "./audio.svelte";
  import Txt from "./txt.svelte";
  import Contract from "./contract.svelte";

  export let onClose;
  export let folder;
  export let onOpenNewFolder;
  export let cracked;

  let currentOpenItem = "";

  let passInput = "";
  let wrongPass = false;

  function closeItem(e) {
    e.stopPropagation();
    currentOpenItem = "";
    let audio = new Audio("/click_sound.mp3");
    audio.play();
  }

  function enterPass() {
    if (folder.pass.includes(passInput.toLowerCase())) {
      folder.passHasBeenCracked = true;
      let audio = new Audio("/unlock_sound.mp3");
      audio.play();
    } else {
      wrongPass = true;
      passInput = "";
      let audio = new Audio("/fail_sound.mp3");
      audio.play();
    }
  }

  function onItemOpen(item) {
    let audio = new Audio("/click_sound.mp3");
    audio.play();
    if (item.type != "folder" && item.type != "among-us") {
      currentOpenItem = item.name;
    } else {
      onOpenNewFolder(item);
    }
  }
</script>

<div class="base">
  <div class="close" on:click={onClose}>X</div>
  {#if folder.hasPass == false || folder.passHasBeenCracked == true}
    <div class="items">
      {#each folder.items as item}
        <div class="item" on:click={() => onItemOpen(item)}>
          <img src={item.icon} class="icon" />
          {item.name}
          {#if currentOpenItem == item.name}
            {#if item.type == "txt"}
              <Txt {item} onClose={(e) => closeItem(e)} />
            {/if}
            {#if item.type == "image"}
              <Image {item} onClose={(e) => closeItem(e)} />
            {/if}
            {#if item.type == "audio"}
              <Audioplayer {item} onClose={(e) => closeItem(e)} />
            {/if}
            {#if item.type == "contract"}
              <Contract bind:cracked {item} onClose={(e) => closeItem(e)} />
            {/if}
          {/if}
        </div>
      {/each}
    </div>
  {:else}
    <div class="passContainer">
      <h1>Denne mappe er låst!</h1>
      {#if !wrongPass}
        <h3>Indtast kode for at låse mappen op</h3>
      {:else}
        <h3 style="color: red;">Forkert kode!! Prøv igen</h3>
      {/if}
      <input bind:value={passInput} type="password" />
      <input type="button" value="Lås op" on:click={enterPass} />
    </div>
  {/if}
</div>

<style>
  .base {
    width: 70rem;
    height: 40rem;
    background-color: sandybrown;
    z-index: 100;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .passContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .items {
    padding: 2rem;
    display: flex;
    gap: 2rem;
  }

  .item {
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    max-width: 3rem;
  }

  .close {
    cursor: pointer;
    margin-left: 67rem;
    margin-top: 1rem;
    font-size: 3rem;
    color: white;
    font-weight: 900;
  }
</style>
