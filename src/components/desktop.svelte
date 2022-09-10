<script>
  import Amongus from "./amongus.svelte";
  import Folder from "./folder.svelte";
  import Program from "./program.svelte";
  import { programs } from "./programs";

  let currentProgram = null;
  let audio = new Audio("/click_sound.mp3");

  function executeProgram(program) {
    audio.play();
    if (currentProgram == program) {
      currentProgram = null;
    } else {
      currentProgram = program;
    }
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
      <Amongus onClose={() => executeProgram(null)} program={currentProgram} />
    {/if}
  {/if}
</div>
