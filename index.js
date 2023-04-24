require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const user = require("./routes/user");

const db = require("./config/db");
const sequelize = db.sequelize;

const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", user);

app.listen(port, () => {
    console.log(`server is listening  on http://localhost:${port}`);
});
