import axios from "axios";
import { getCurrentDate } from "../helpers/getDate.helper.js";

const currentYear = new Date().getFullYear();

export const Astana = async (req, res) => {
  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/51.133333/71.433333`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

export const Oskemen = async (req, res) => {
  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/49.948325/82.627848`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

export const Almaty = async (req, res) => {
  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/43.238293/76.945465`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

export const Shymkent = async (req, res) => {
  try {
    const response = await axios.get(
      `https://namaz.muftyat.kz/kk/api/times/${currentYear}/42.368009/69.612769`
    );
    res.json(response.data.result.find((el) => el.date === getCurrentDate()));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

export default {
  Almaty,
  Astana,
  Shymkent,
  Oskemen,
};
