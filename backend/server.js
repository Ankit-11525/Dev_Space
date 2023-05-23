require('dotenv').config();
const express = require('express');
const router = require('./routes');
const DbConnect = require('./database');
const cors = require('cors');

const corsOptions = {
    Credentials: true,
    origin: ['http://localhost:3000'],

}

const app = express();
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5500;
DbConnect(); 
app.use(express.json());
app.use(router);

app.get('/', (req, res) =>{
    res.send('Hello from express JS');
})

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));