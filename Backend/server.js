const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(bodyParser.json());

const filePath = "./players.json";

// Fonction pour lire les données du fichier JSON
const readData = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

// Fonction pour écrire les données dans le fichier JSON
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

// Endpoint pour ajouter un joueur
app.post("/players", (req, res) => {
  const { name, position, number } = req.body;
  const players = readData();
  const newPlayer = { id: players.length + 1, name, position, number };
  players.push(newPlayer);
  writeData(players);
  res.status(201).json(newPlayer);
});

// Endpoint pour obtenir tous les joueurs
app.get("/players", (req, res) => {
  const players = readData();
  res.json(players);
});

// Endpoint pour obtenir un joueur par ID
app.get("/players/:id", (req, res) => {
  const players = readData();
  const player = players.find((p) => p.id === parseInt(req.params.id));
  if (player) {
    res.json(player);
  } else {
    res.status(404).send("Player not found");
  }
});

// Endpoint pour mettre à jour un joueur par ID
app.put("/players/:id", (req, res) => {
  const { name, position, number } = req.body;
  const players = readData();
  const playerIndex = players.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (playerIndex !== -1) {
    players[playerIndex] = {
      id: parseInt(req.params.id),
      name,
      position,
      number,
    };
    writeData(players);
    res.json(players[playerIndex]);
  } else {
    res.status(404).send("Player not found");
  }
});

// Endpoint pour supprimer un joueur par ID
app.delete("/players/:id", (req, res) => {
  let players = readData();
  const playerIndex = players.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (playerIndex !== -1) {
    players = players.filter((p) => p.id !== parseInt(req.params.id));
    writeData(players);
    res.status(204).send();
  } else {
    res.status(404).send("Player not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
