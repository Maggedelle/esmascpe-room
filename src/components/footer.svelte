<script lang="ts">
  let date = new Date();
  date.setSeconds(55);
  date.setMinutes(14);
  let gameOver = false;

  let formatDate = date.getMinutes() + ":" + date.getSeconds();
  setInterval(() => {
    date.setSeconds(date.getSeconds() - 1);
    formatDate =
      (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) +
      ":" +
      (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
    if (formatDate == "00:00") {
      gameOver = true;
    }
  }, 1000);
</script>

<div>
  <div class="base">{formatDate} | ESMAOS</div>
  {#if gameOver}
    <div class="modal-overlay">
      <div class="modal">
        <h1 class="gameover">Game Over</h1>
      </div>
    </div>
  {/if}
</div>

<style>
  .base {
    position: fixed;
    bottom: 0;
    right: 0;
    color: white;
    padding: 1.5rem 2rem;
    font-size: 2rem;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }

  .modal {
    text-align: center;
    background-color: white;
    height: 12rem;
    width: 50rem;
    margin-top: 10%;
    padding: 10rem 0;
    border-radius: 20px;
  }

  .gameover {
    color: red;
    font-weight: bold;
    font-size: 100px;
  }
</style>
