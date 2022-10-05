const express = require("express");
const app = express();
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let teams = [];
let tv;
class Team {
  constructor(id) {
    this.id = id;
    this.currentTime = 5;
    this.started = false;
    this.task1 = 0;
    this.task2 = 0;
    this.task3 = 0;
    this.task4 = 0;
    this.task5 = 0;
    this.done = 0;
  }
}
wss.getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4();
};

setInterval(() => {
  if (tv != null) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN && client.id == tv) {
        client.send(JSON.stringify({ type: "update", data: teams }));
      }
    });
  }
  teams.forEach((team) => {
    if (team != null && team.started && team.done == 0) {
      team.currentTime++;
    }
  });
}, 1000);

wss.on("connection", function connection(ws) {
  const id = wss.getUniqueID();
  ws.id = id;
  ws.on("message", function incoming(message, isBinary) {
    const msg = JSON.parse(message.toString());
    switch (msg.type) {
      case "tv-connected":
        console.log("the tv is connected.");
        tv = ws.id;
        break;
      case "team-connected":
        console.log("A team connected.");
        break;
      case "team-init":
        teams[msg.data] = new Team(ws.id);
        console.log("team " + msg.data + " created");
        break;
      case "team-start":
        if (teams[msg.data] != null) {
          teams[msg.data].started = true;
          console.log("team started.");
        }
        break;
      case "team-task1-done":
        if (teams[msg.data] != null) {
          teams[msg.data].task1 = teams[msg.data].currentTime;
          console.log("team beated task 1");
        }
        break;
      case "team-task1-done":
        if (teams[msg.data] != null) {
          teams[msg.data].task1 = teams[msg.data].currentTime;
          console.log("team beated task 1");
        }
        break;
      case "team-task2-done":
        if (teams[msg.data] != null) {
          teams[msg.data].task2 = teams[msg.data].currentTime;
          console.log("team beated task 1");
        }
        break;
      case "team-task3-done":
        if (teams[msg.data] != null) {
          teams[msg.data].task3 = teams[msg.data].currentTime;
          console.log("team beated task 3");
        }
        break;
      case "team-task4-done":
        if (teams[msg.data] != null) {
          teams[msg.data].task4 = teams[msg.data].currentTime;
          console.log("team beated task 4");
        }
        break;
      case "team-task5-done":
        if (teams[msg.data] != null) {
          teams[msg.data].task5 = teams[msg.data].currentTime;
          console.log("team beated task 5");
        }
        break;
      case "team-finish":
        if (teams[msg.data] != null) {
          teams[msg.data].done = teams[msg.data].currentTime;
          console.log("team beated the game");
        }
        break;
    }
  });

  ws.on("close", function () {
    if (ws.id == tv) {
      tv = null;
      console.log("TV disconnected");
    } else console.log("Team disconnected");
  });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
server.listen(8080, () => {
  console.log("Listening to port 8080");
});
