const knex = require("./knex");
// const cors = require("cors");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
// app.use(cors("http://localhost:5173"));
app.use(express.json());
app.use(express.static("dist"));

//確認用
app.get("/api", (req, res) => {
  res.send("hello");
});

app.get("/api/list", (req, res) => {
  knex("buy_list")
    .select()
    .then(result => {
      res.send(result);
    });
});

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
