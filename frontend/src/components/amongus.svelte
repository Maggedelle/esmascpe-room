<script>
  import { onMount } from "svelte";

  export let onClose;
  export let program;
  export let onRiddleCompleted;
  let canvas;
  let context;

  let isMouseDown = false;
  let lastClickedPoint;
  let connectedPoints = [];

  let startPoint = { x: 0, y: 0 };
  let points = [
    {
      id: 0,
      label: "*",
      x: 30,
      y: 150,
      color: "red",
    },
    {
      id: 1,
      label: "*",
      x: 180,
      y: 150,
      color: "green",
    },
    {
      id: 2,
      label: "*",
      x: 330,
      y: 150,
      color: "blue",
    },
    {
      id: 3,
      label: "*",
      x: 480,
      y: 150,
      color: "yellow",
    },
    {
      id: 4,
      label: "*",
      x: 630,
      y: 150,
      color: "pink",
    },
    {
      id: 5,
      label: "*",
      x: 780,
      color: "white",
      y: 150,
    },
    {
      id: 6,
      label: "1",
      color: "white",
      x: 30,
      y: 500,
    },
    {
      id: 7,
      label: "2",
      x: 180,
      y: 500,
      color: "white",
    },
    {
      id: 8,
      label: "3",
      x: 330,
      y: 500,
      color: "white",
    },
    {
      id: 9,
      label: "4",
      x: 480,
      y: 500,
      color: "white",
    },
    {
      id: 10,
      label: "5",
      x: 630,
      y: 500,
      color: "white",
    },
    {
      id: 11,
      label: "6",
      x: 780,
      y: 500,
      color: "white",
    },
  ];

  //Combination is by ID
  let correctCombination = [
    { from: 0, to: 11 },
    { from: 1, to: 6 },
    { from: 2, to: 8 },
    { from: 3, to: 7 },
    { from: 4, to: 9 },
    { from: 5, to: 10 },
  ];

  function onMouseMove(e) {
    context.clearRect(0, 0, 1000, 1000);
    if (isMouseDown) {
      context.beginPath();
      context.moveTo(startPoint.x, startPoint.y);
      context.lineTo(e.offsetX, e.offsetY);
      context.lineWidth = 20;
      context.strokeStyle = "black";
      context.stroke();
    }
    connectedPoints.forEach((point) => {
      context.lineWidth = 20;

      context.beginPath();
      context.moveTo(point.a.x + 50, point.a.y + 50);
      context.lineTo(point.b.x + 50, point.b.y + 50);
      context.strokeStyle = "black";
      context.stroke();
    });
    drawUI();
  }

  function drawUI() {
    for (let i = 0; i < points.length; i++) {
      context.beginPath();
      context.lineWidth = 5;
      context.strokeStyle = points[i].color;
      context.fillStyle = points[i].color;
      context.fillRect(points[i].x, points[i].y, 100, 100);
      context.rect(points[i].x, points[i].y, 100, 100);
      context.stroke();
      context.font = "60px Georgia";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = "black";
      context.fillText(
        points[i].label,
        points[i].x + 100 / 2,
        points[i].y + 100 / 2
      );
    }
  }

  function collisionDetection(e) {
    let clickedPoint;
    let elemLeft = canvas.offsetLeft + canvas.clientLeft;
    let elemTop = canvas.offsetTop + canvas.clientTop;
    var x = e.pageX - elemLeft,
      y = e.pageY - elemTop;

    points.forEach(function (point) {
      if (
        y > point.y &&
        y < point.y + 100 &&
        x > point.x &&
        x < point.x + 100
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

    if (connectedPoints.length == 6) {
      checkForRightCombination();
    }
  }

  function checkForRightCombination() {
    let correctCombinationCount = 0;
    correctCombination.forEach((combination) => {
      const existingPoint1 = connectedPoints.findIndex(
        (x) => x.a.id == combination.from && x.b.id == combination.to
      );
      const existingPoint2 = connectedPoints.findIndex(
        (x) => x.a.id == combination.to && x.b.id == combination.from
      );

      if (existingPoint1 != -1 || existingPoint2 != -1) {
        correctCombinationCount++;
      }
    });

    if (correctCombinationCount == 6) {
      onRiddleCompleted();
    }
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
  <canvas
    width="1200"
    height="600"
    bind:this={canvas}
    style="background: url('/public/electrical.jpg');  background-repeat:no-repeat; background-size: cover;"
  />
</div>

<style>
  .base {
    min-width: 70rem;
    max-height: 40rem;
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
