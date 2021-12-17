const express = require("express")
const { route } = require("express/lib/application")
const idolSchema = require("../schemas/Idol")
const router = express.Router()

router.get("/idols", (req, res) => {
    idolSchema.find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})

router.get("/idols/:id", (req, res) => {
    const { id } = req.params
    idolSchema.findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})

router.post("/idols", (req, res) => {
    const idol = idolSchema(req.body)
    idol.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})

router.put("/idols/:id", (req, res) => {
    const { id } = req.params
    const { fname, lname, school, age } = req.body
    idolSchema.updateOne(
        { _id: id }, 
        { $set: { fname, lname, school, age} }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})

router.delete("/idols/:id", (req, res) => {
    const { id } = req.params
    idolSchema.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})

module.exports = router