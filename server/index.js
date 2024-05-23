const express = require("express");
const knex = require("./knex");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

//確認用
app.get("/api", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
