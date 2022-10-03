<script lang="ts">
  let date = new Date();
  date.setSeconds(55);
  date.setMinutes(14);

  let formatDate = date.getMinutes() + ":" + date.getSeconds();
  setInterval(() => {
    date.setSeconds(date.getSeconds() - 1);
    formatDate =
      date.getMinutes() +
      ":" +
      (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
  }, 1000);
</script>

<div class="base">{formatDate} | ESMAOS</div>

<style>
  .base {
    position: fixed;
    bottom: 0;
    right: 0;
    color: white;
    padding: 1.5rem 2rem;
    font-size: 2rem;
  }
</style>
