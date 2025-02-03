const express = require('express');
const path = require('path');

const app = express();



// Default to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//all them math stuff here
app.get('/add', (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    const c = parseInt(req.query.c) || 0;
    const sum = a + b + c;
    res.send(`The sum is: ${sum}`);
});

app.get('/sub', (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    const c = parseInt(req.query.c) || 0;
    const sub = a - b - c;
    res.send(`Rozdil je ${sub}`);
});

app.get('/mult', (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    const c = parseInt(req.query.c) || 0;
    const mult = a * b * c;
    res.send(`Součin je ${mult}`);
});

app.get('/div', (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    const c = parseInt(req.query.c) || 0;
    const div = a / b / c;
    res.send(`Podíl je ${div}`);
});

app.get('/pow', (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    const c = parseInt(req.query.c) || 0;
    const pow = Math.pow(a, b) / c;
    res.send(`Mocnina je ${pow}`);
});

app.get('/sqrt', (req, res) => {
    const a = parseInt(req.query.a) || 0;
    const b = parseInt(req.query.b) || 0;
    const c = parseInt(req.query.c) || 0;
    const sqrt = Math.sqrt(a) * Math.sqrt(b) / c;
    res.send(`Odmocnina je ${sqrt}`);
});

// Listen to port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
