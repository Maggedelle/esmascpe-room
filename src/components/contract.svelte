<script>
  export let item;
  export let onClose;
</script>

<div class="base">
  <div class="close" on:click={onClose}>X</div>
  <div class="header">KONTRAKT</div>
  <div class="baseText">
    1. I skal være mega kedelige <br />
    2. I skal være grå ik grøn <br />
    3. I skal styre jer med alt det papvin <br />
    4. I må ikke tage næsebajere
  </div>
  <button class="button">SLET!!</button>
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
  }
</style>
