const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
require('./db/conn');
app.use(bodyparser.json());
app.use(cors());
const router = require('./routers/student');
const port = 1101;

app.use('/api', router);


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})