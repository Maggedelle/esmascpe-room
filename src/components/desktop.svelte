<script>
  import Folder from "./folder.svelte";
  import Program from "./program.svelte";
  import { programs } from "./programs";

  let currentFolder = null;

  function openFolder(folder) {
    if (currentFolder == folder) {
      currentFolder = null;
    } else {
      currentFolder = folder;
    }
  }
</script>

<div>
  {#each programs as program}
    <Program
      x={program.x}
      y={program.y}
      label={program.label}
      onClick={() => openFolder(program)}
      image={program.image}
    />
  {/each}

  {#if currentFolder != null}
    <Folder onClose={() => openFolder(null)} folder={currentFolder} />
  {/if}
</div>
