const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`connecting to the port no. ${port}`);
});