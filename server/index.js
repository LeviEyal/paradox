const express = require('express');
const app = express();
const cors = require('cors');
const chats = require('./chats.json');
const questions = require('./questions.json');
const answers = require('./answers.json');
app.use(cors());
app.use(express.json());

app.get('/chats', (req, res) => res.json(chats));
app.get('/questions', (req, res) => res.json(questions));
app.get('/answers', (req, res) => res.json(answers));

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));