<script>
  export let x;
  export let y;
  export let label;
  export let image;
  export let onClick;
</script>

<div style="--x: {x}%; --y:{y}%" class="base" on:click={onClick}>
  <div class="icon">
    <img src={image} class="image" />
  </div>
  <p class="label">{label}</p>
</div>

<style>
  .base {
    position: fixed;
    top: var(--y);
    left: var(--x);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .label {
    margin: 0;
    text-align: center;
    color: white;
  }

  .image {
    max-width: 4rem;
    max-height: 4rem;
  }

  .icon {
    width: 4rem;
    height: 4rem;
  }
</style>
