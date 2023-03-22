const express = require('express');
const app = express();

const { initDB } = require('./db.config');
const authRouter = require('./routes/authRouter');
const dotenv = require('dotenv');
const addLeadRouter = require('./routes/leadRouter');
dotenv.config();
initDB();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.use('/', authRouter);
app.use('/', addLeadRouter);

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})
app.get('/logout', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})
app.get('/viewLead', (req, res) => {
    res.sendFile(__dirname + '/public/viewLead.html');
})
app.listen(8000, () => {
    console.log("server is running")
});