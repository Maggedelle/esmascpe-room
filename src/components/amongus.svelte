<script>
  import { onMount } from "svelte";

  export let onClose;
  export let program;

  let canvas;
  let context;

  let isMouseDown = false;
  let lastClickedPoint;
  let connectedPoints = [];

  let startPoint = { x: 0, y: 0 };
  let points = [
    {
      id: 0,
      label: "1",
      x: 30,
      y: 50,
    },
    {
      id: 1,
      label: "2",
      x: 80,
      y: 50,
    },
    {
      id: 2,
      label: "3",
      x: 130,
      y: 50,
    },
    {
      id: 3,
      label: "4",
      x: 180,
      y: 50,
    },
    {
      id: 4,
      label: "5",
      x: 230,
      y: 50,
    },
    {
      id: 5,
      label: "6",
      x: 280,
      y: 50,
    },
    {
      id: 6,
      label: "1",
      x: 30,
      y: 300,
    },
    {
      id: 7,
      label: "2",
      x: 80,
      y: 300,
    },
    {
      id: 8,
      label: "3",
      x: 130,
      y: 300,
    },
    {
      id: 9,
      label: "4",
      x: 180,
      y: 300,
    },
    {
      id: 10,
      label: "5",
      x: 230,
      y: 300,
    },
    {
      id: 11,
      label: "6",
      x: 280,
      y: 300,
    },
  ];

  function onMouseMove(e) {
    context.clearRect(0, 0, 1000, 1000);
    if (isMouseDown) {
      context.beginPath();
      context.moveTo(startPoint.x, startPoint.y);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
    }

    connectedPoints.forEach((point) => {
      context.beginPath();
      context.moveTo(point.a.x, point.a.y);
      context.lineTo(point.b.x, point.b.y);
      context.stroke();
    });
    drawUI();
  }

  function drawUI() {
    context.font = "30px Arial";
    for (let i = 0; i < points.length; i++) {
      context.fillText(points[i].label, points[i].x, points[i].y);
    }
  }

  function collisionDetection(e) {
    let clickedPoint;
    points.forEach((point) => {
      if (
        !(
          point.y + 20 < e.offsetY ||
          point.y > e.offsetY + 20 ||
          point.x + 20 < e.offsetX ||
          point.x > e.offsetX + 20
        )
      ) {
        clickedPoint = point;
      }
    });

    return clickedPoint;
  }

  function onMouseDown(e) {
    startPoint = { x: e.offsetX, y: e.offsetY };
    let point = collisionDetection(e);
    if (point != null) {
      isMouseDown = true;
      lastClickedPoint = point;
    }
  }

  function onMouseUp(e) {
    isMouseDown = false;
    let point = collisionDetection(e);

    if (point != null && lastClickedPoint != null) {
      addConnectedPoint(lastClickedPoint, point);
    }

    lastClickedPoint = null;
  }

  function addConnectedPoint(a, b) {
    const existingPoint1 = connectedPoints.findIndex(
      (x) => x.a.id == a.id || x.b.id == a.id
    );

    if (existingPoint1 != -1) {
      connectedPoints.splice(existingPoint1, 1);
    }
    const existingPoint2 = connectedPoints.findIndex(
      (x) => x.a.id == b.id || x.b.id == b.id
    );
    if (existingPoint2 != -1) {
      connectedPoints.splice(existingPoint2, 1);
    }
    connectedPoints.push({ a: a, b: b });
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
  <canvas width="1000" height="1000" bind:this={canvas} />
</div>

<style>
  .base {
    min-width: 70rem;
    min-height: 60rem;
    background-color: white;
    z-index: 100;
    position: fixed;
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
