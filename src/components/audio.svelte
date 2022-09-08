<script>
  export let item;
  export let onClose;
</script>

<div class="base">
  <div class="close" on:click={onClose}>X</div>
  <audio controls>
    <source src={item.src} type="audio/mp3" />
  </audio>
</div>

<style>
  .base {
    background-color: white;
    position: fixed;
    display: flex;
    bottom: 27rem;
    left: 10rem;
    min-width: 10rem;
    min-height: 8rem;
    cursor: auto;
    flex-direction: column;
  }
  .close {
    cursor: pointer;
    margin-left: 48rem;
    margin-top: 1rem;
    font-size: 2rem;
  }
</style>
