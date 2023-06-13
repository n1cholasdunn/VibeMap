const express = require("express");
require('dotenv').config()
const sequelize = require("./models/models.index");
const cors = require("cors");
const app = express();
const router = require("./router");


app.use(cors());
app.use(express.json());
app.use('/', router);

(async () => {
    try {
        await sequelize.sync();
        console.log('Connected to the db at port 5433 🟦');
        // Start server
        const port = 3333
        app.listen(port, () => {
            console.log(`Server listening on port ${port} 🟩`);
        });
    } catch (error) {
        console.error('NOT CONNECTED to the database:', error);
    }
})()