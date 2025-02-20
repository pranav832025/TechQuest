require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;  // Use this line to allow for Render's environment variable

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL client setup using DATABASE_URL from .env file
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to the database');

    // Create the table if it doesn't exist
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS participant (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        class_name VARCHAR(100) NOT NULL,  -- Changed from 'class' to 'class_name'
        college_name VARCHAR(255) NOT NULL,
        round_1_score INT DEFAULT 0,
        round_2_score INT DEFAULT 0,
        round_3_score INT DEFAULT 0,
        time_left INT DEFAULT 0,  
        UNIQUE(name, class_name) -- Ensure uniqueness
      );
    `;
    return client.query(createTableQuery);
  })
  .then(() => console.log('Table created or already exists'))
  .catch(err => console.error('Database connection error:', err.stack));

// Home route - Serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to submit scores for a specific round
app.post('/submit-scores', async (req, res) => {
  const { name, class_name, college_name, round, score, time_left } = req.body;

  console.log('Received submission data:', { name, class_name, college_name, round, score, time_left });

  if (!name || !class_name || !college_name || !round || isNaN(score) || isNaN(time_left)) {
    return res.status(400).json({ message: 'Invalid input data.' });
  }

  const numericScore = Number(score);
  const numericTimeLeft = Number(time_left);

  try {
    if (round < 1 || round > 3) {
      return res.status(400).json({ message: 'Invalid round number.' });
    }

    const column = `round_${round}_score`;

    const query = `
      INSERT INTO participant (name, class_name, college_name, ${column}, time_left) 
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (name, class_name) 
      DO UPDATE SET ${column} = EXCLUDED.${column}, time_left = EXCLUDED.time_left
    `;

    console.log('Executing query:', query);
    console.log('Query values:', [name, class_name, college_name, numericScore, numericTimeLeft]);

    await client.query(query, [name, class_name, college_name, numericScore, numericTimeLeft]);

    const message = round === 3
      ? 'Quiz completed! Thank you for participating.'
      : `Round ${round} completed! Proceed to round ${round + 1}.`;

    console.log(`Score for ${name} in round ${round} updated successfully.`);

    res.status(200).json({ message });
  } catch (err) {
    console.error('Error executing query:', err.stack);
    res.status(500).json({ message: 'Error updating data.' });
  }
});

// API to get all participants
app.get('/participant', async (req, res) => {
  try {
    const query = 'SELECT * FROM participant';
    const result = await client.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No participants found.' });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching participants:', err);
    res.status(500).json({ message: 'Error fetching participants.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

