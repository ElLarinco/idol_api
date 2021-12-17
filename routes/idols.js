const express = require("express")
const router = express.Router()

const { getIdols, createIdol, getIdol, updateIdol, deleteIdol } = require("../controllers/idols")

router.get("/", getIdols())

router.post("/", createIdol())

router.get("/:id", getIdol())

router.patch("/:id", updateIdol())

router.delete("/:id", deleteIdol())

module.exports = router