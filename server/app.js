import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "../client")));

app.get('/api/ping', (req, res) => {
    res.status(200).send({ message: "pong" })
})

app.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`)
})