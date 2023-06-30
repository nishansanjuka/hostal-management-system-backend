const express = require('express');
const app = express();

const config = require('./config/server');

const PORT = config.port;

const { getHostels, getHostelById, createHostel } = require('./controllers/hostelsController');

app.get('/', (req, res) => {
  res.send('Welcome to the HMS');
  console.log("Loading root");
});

app.get('/api/hostels', async (req, res) => {
  console.log("Loading hostels");
  try {
    const hostels = await getHostels();
    res.json(hostels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('api/rooms', (req, res) => { });

app.get('api/room-requests', (req, res) => { });

app.get('api/users', (req, res) => { });

app.post('api/users', (req, res) => { });

app.get('api', (req, res) => { });



app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}`);
});