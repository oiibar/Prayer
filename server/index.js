const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Home");
});
const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = today.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

app.get("/astana", async (req, res) => {
  const currentYear = new Date().getFullYear();

  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/51.133333/71.433333`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/almaty", async (req, res) => {
  const currentYear = new Date().getFullYear();

  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/43.238293/76.945465`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/shymkent", async (req, res) => {
  const currentYear = new Date().getFullYear();

  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/42.368009/69.612769`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/oskemen", async (req, res) => {
  const currentYear = new Date().getFullYear();

  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/49.948325/82.627848`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
