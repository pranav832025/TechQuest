// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // You need this to work with file paths

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve the index.html file when accessing the root URL (http://localhost:3000)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to handle form submission (this stays the same)
app.post('/submit', (req, res) => {
    const { name, class: userClass, answers } = req.body;

    // Check if required fields are present
    if (!name || !userClass || !answers) {
        return res.status(400).json({
            message: 'Missing required fields: name, class, or answers.'
        });
    }

    console.log('Received submission:', req.body);

    const correctAnswers = {
        question1: 'mongodb',
        question2: 'novell',
        question3: 'Graphics Processing Unit',
        question4: 'dictionary.keys()',
        question5: 'numpy',
        question6: 'interpreted_language',
        question7: 'python3',
        question8: 'tuples',
        question9: 'focus_on_functions',
        question10: 'polymorphism',
        question11: 'mesh',
        question12: 'router',
        question13: 'data_redundancy',
        question14: 'file_manager',
        question15: 'array',
    };

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    // Compare answers and calculate the score
    Object.keys(correctAnswers).forEach((key) => {
        if (answers[key] === correctAnswers[key]) {
            score++;
        }
    });

    res.json({
        message: 'Quiz submitted successfully!',
        name,
        class: userClass,
        score,
        total: totalQuestions,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
