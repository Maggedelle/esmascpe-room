<script>
  import Amongus from "./amongus.svelte";
  import Folder from "./folder.svelte";
  import Program from "./program.svelte";
  import { programs } from "./programs";

  export let backgroundType;
  export let cracked;
  export let playSong;
  export let team;
  export let socket;

  let currentProgram = null;
  let audio = new Audio("/click_sound.mp3");
  let success = new Audio("/unlock_sound.mp3");

  let currentDesktop = 0;

  function executeProgram(program) {
    audio.play();
    if (currentProgram == program) {
      currentProgram = null;
    } else {
      currentProgram = program;
    }
  }

  function onAmongUsCompleted() {
    success.play();
    executeProgram(null);
    backgroundType = "green";
    currentDesktop = 1;
    playSong("/baghjul.mp3");
    socket.send(
      JSON.stringify({
        type: "team-task4-done",
        data: team,
      })
    );
  }
</script>

<div>
  {#each programs as program}
    {#if program.desktop == currentDesktop}
      <Program
        x={program.x}
        y={program.y}
        label={program.label}
        onClick={() => executeProgram(program)}
        image={program.image}
      />
    {/if}
  {/each}

  {#if currentProgram != null}
    {#if currentProgram.type == "folder"}
      <Folder
        onClose={() => executeProgram(null)}
        folder={currentProgram}
        onOpenNewFolder={executeProgram}
        bind:cracked
        {team}
        {socket}
      />
    {/if}
    {#if currentProgram.type == "among-us"}
      <Amongus
        onRiddleCompleted={onAmongUsCompleted}
        onClose={() => executeProgram(null)}
        program={currentProgram}
      />
    {/if}
  {/if}
</div>
