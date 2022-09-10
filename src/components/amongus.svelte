<script>
  import { onMount } from "svelte";

  export let onClose;
  export let program;

  let canvas;
  let context;

  let isMouseDown = false;
  let startPoint = { x: 0, y: 0 };
  function onMouseMove(e) {
    context.clearRect(0, 0, 1000, 1000);
    if (isMouseDown) {
      context.beginPath();
      console.log(e);
      context.moveTo(startPoint.x, startPoint.y);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
    }
    drawUI();
  }

  function drawUI() {
    context.font = "30px Arial";
    context.fillText("1", 30, 50);
    context.fillText("2", 80, 50);
    context.fillText("3", 130, 50);
    context.fillText("4", 180, 50);
    context.fillText("5", 230, 50);
    context.fillText("6", 280, 50);
    context.fillText("1", 30, 300);
    context.fillText("2", 80, 300);
    context.fillText("3", 130, 300);
    context.fillText("4", 180, 300);
    context.fillText("5", 230, 300);
    context.fillText("6", 280, 300);
  }

  function onMouseDown(e) {
    isMouseDown = true;
    startPoint = { x: e.offsetX, y: e.offsetY };
  }
  function onMouseUp() {
    isMouseDown = false;
  }

  onMount(() => {
    context = canvas.getContext("2d");
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    drawUI();
  });
</script>

<div class="base">
  <div class="close" on:click={onClose}>X</div>
  <canvas width="1000" height="1000" bind:this={canvas}>
    <div class="container">
      <div class="numbers">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>

      <div class="outlets">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>
    </div>
  </canvas>
</div>

<style>
  .base {
    min-width: 70rem;
    min-height: 60rem;
    background-color: white;
    z-index: 100;
    position: fixed;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20rem;
  }

  .numbers {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    font-size: 5rem;
    cursor: pointer;
  }

  .outlets {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    font-size: 5rem;
    cursor: pointer;
  }

  .close {
    cursor: pointer;
    margin-left: 67rem;
    margin-top: 1rem;
    font-size: 3rem;
    color: black;
    font-weight: 900;
  }
</style>
