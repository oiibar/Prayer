import express from "express";
import controllers from "../controllers/request.controller.js";
const { Astana, Almaty, Oskemen, Shymkent } = controllers;

const router = express.Router();

router.get("/astana", Astana);
router.get("/almaty", Almaty);
router.get("/oskemen", Oskemen);
router.get("/shymkent", Shymkent);

export default router;
