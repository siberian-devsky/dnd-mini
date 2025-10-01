import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/heartbeat', (_, res) => {
  res.status(200).send({ message: 'no complaints here' });
});


app.listen(port, () => console.log(`App listening on port ${port}`));
