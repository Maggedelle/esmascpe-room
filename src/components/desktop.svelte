<script>
  import Amongus from "./amongus.svelte";
  import Folder from "./folder.svelte";
  import Program from "./program.svelte";
  import { programs } from "./programs";

  export let backgroundType;

  let currentProgram = null;
  let audio = new Audio("/click_sound.mp3");
  let success = new Audio("/unlock_sound.mp3");

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
  }
</script>

<div>
  {#each programs as program}
    <Program
      x={program.x}
      y={program.y}
      label={program.label}
      onClick={() => executeProgram(program)}
      image={program.image}
    />
  {/each}

  {#if currentProgram != null}
    {#if currentProgram.type == "folder"}
      <Folder onClose={() => executeProgram(null)} folder={currentProgram} />
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
