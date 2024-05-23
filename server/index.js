// const express = require("express");
import express from "express";
const app = express();

// const PORT = process.env.PORT || 9000;
const PORT = 3000;

app.use(express.json());

//確認用
app.get("/api", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
