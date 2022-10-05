<script lang="ts">
  import { onMount } from "svelte";

  export let socket;
  export let teams = [];

  onMount(() => {
    socket = new WebSocket("ws://localhost:8080");
    socket.addEventListener("open", () => {
      console.log("CONNECTED.");
      socket.send(JSON.stringify({ type: "tv-connected" }));
    });

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case "update":
          teams = message.data;
          break;
      }
    });
  });
</script>
