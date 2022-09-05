<script>
  export let item;
  export let onClose;
</script>

<div class="base">
  <div class="close" on:click={onClose}>X</div>
  <img class="image" src={item.src} />
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
  }

  .image {
    max-width: 50rem;
    max-height: 50rem;
  }
  .close {
    cursor: pointer;
    margin-left: 48rem;
    margin-top: 1rem;
    font-size: 2rem;
  }
</style>
