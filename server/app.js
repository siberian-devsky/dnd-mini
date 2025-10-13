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
    res.json({ message: "pong" })
})

app.post("/api/parrot", (req, res) => {
    const data = req.body
    if (!data) {
        res
        .status(400)
        .json({
            message: 'no data to parrot',
            timestamp: new Date().toDateString(),
            timestamp: new Date().toLocaleDateString(),
            timestamp: new Date().toLocaleString(),
            timestamp: new Date().toLocaleTimeString(),
            timestamp: new Date().toTimeString(),
            timestamp: new Date().toUTCString()
        })
    }

    try {
        res
        .set({
            'X-Data-Authority': 'Goldwater',
            'X-Ownwer': 'zilch'
        })
        .json({
            message: "data parroting",
            body: {data: data, 'new data': 42},
            date: new Date().toISOString()
        })
    } catch (err) {
        res.status(500).json( {message: `generic error ${err}`} )
    }
})

app.listen(PORT, () => {
    console.log(`server listening on localhost:${PORT}`)
})