<script lang="ts">
  import { onMount } from "svelte";

  export let socket;
  export let team;
  let teams = [];

  onMount(() => {
    socket = new WebSocket("ws://localhost:8080");
    socket.addEventListener("open", () => {
      console.log("CONNECTED.");
      socket.send(JSON.stringify({ type: "team-connected" }));
    });

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case "update":
          break;
      }
      console.log(JSON.parse(event.data));
    });
  });
</script>
