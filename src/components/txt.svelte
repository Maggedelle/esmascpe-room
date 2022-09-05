<script>
  export let item;
  export let onClose;
</script>

<div class="base">
  <div class="close" on:click={onClose}>X</div>
  <textarea value={item.text} class="text" />
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
  .close {
    cursor: pointer;
    margin-left: 48rem;
    margin-top: 1rem;
    font-size: 2rem;
  }
  .text {
    min-width: 50rem;
    min-height: 50rem;
    border: none;
    cursor: text;
  }
</style>
