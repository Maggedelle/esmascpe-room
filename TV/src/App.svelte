<script>
  import Socket from "./components/Socket.svelte";
  let socket;
  export let teams = [];

  function convertTime(time) {
    let min = 0;
    let s = "";
    while (time > 60) {
      time -= 60;
      min++;
    }

    if (min < 10) {
      s += "0" + min + ":";
    } else {
      s += min + ":";
    }
    if (time < 10) {
      s += "0" + time;
    } else {
      s += time;
    }

    return s;
  }
</script>

<Socket bind:socket bind:teams />
<div class="base">
  <div class="header">ESMA ESCAPE ROOM</div>

  <table>
    <tr>
      {#each teams as team, i}
        {#if team != null}
          <th>Team {i - 48}</th>
        {/if}
      {/each}
    </tr>
    <tr>
      {#each teams as team, i}
        {#if team != null && team.task1 != 0}
          <td>Task 1 - {convertTime(team.task1)}</td>
        {/if}
      {/each}
    </tr>
    <tr>
      {#each teams as team, i}
        {#if team != null && team.task2 != 0}
          <td>Task 2 - {convertTime(team.task2)}</td>
        {/if}
      {/each}
    </tr>
    <tr>
      {#each teams as team, i}
        {#if team != null && team.task3 != 0}
          <td>Task 3 - {convertTime(team.task3)}</td>
        {/if}
      {/each}
    </tr>
    <tr>
      {#each teams as team, i}
        {#if team != null && team.task4 != 0}
          <td>Task 4 - {convertTime(team.task4)}</td>
        {/if}
      {/each}
    </tr>
    <tr>
      {#each teams as team, i}
        {#if team != null && team.task5 != 0}
          <td>Task 5 - {convertTime(team.task5)}</td>
        {/if}
      {/each}
    </tr>
    <tr>
      {#each teams as team, i}
        {#if team != null}
          {#if team.done != 0}
            <td>Færdig - {team.done}</td>
          {:else}
            <td>{convertTime(team.currentTime)} </td>
          {/if}
        {/if}
      {/each}
    </tr>
  </table>
</div>

<style>
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
  th,
  td {
    padding: 30px;
    color: white;
  }
  .base {
    display: flex;
    background-color: grey;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
  }

  .header {
    margin-top: 70px;
    font-size: 100px;
    color: white;
    font-weight: bold;
  }
</style>
