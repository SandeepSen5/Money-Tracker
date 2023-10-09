const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();

const userRouter = require('./routes/user')

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'POST',
    credentials: true,
}));


app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database connected')
    })
    .catch(err => console.log(err));

    app.use('/', userRouter);


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
