import express from "express";
import cors from "cors";
import prisma from "./dbClient.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/heartbeat", (req, res) => {
    res.status(200).send({ message: "no complaints here" });
});

// Fetch a player by ID or by role.
app.get("/player/:id", (req, res) => {});

// new player
app.post("/player", async (req, res) => {
    const { type } = req.body;
    try {
        await prisma.player.create({
            data: { type, wins: 0, losses: 0 },
        });
        const players = await prisma.player.findMany();
        res.json(players);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create player" });
    }
});

// Create a new fight with given players + maxRounds.
app.post("/fight", async (req, res) => {
    const fightData = await req.body;
    const players = fightData.players;
    const maxRounds = fightData.rounds;
});

// Fetch fight + all rounds + winner.
app.get("/fight/:id", (req, res) => {});

// Add a round result (heroRoll, villainRoll, winner) to a fight.
app.post("/round", async (req, res) => {
    const roundData = await req.body;
    const heroRoll = roundData.heroRoll;
    const villainRoll = roundData.villainRoll;
});

app.listen(port, () => console.log(`App listening on port ${port}`));
