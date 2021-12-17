const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = 5000

const idolsRoutes = require("./routes/idols")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/idols", idolsRoutes)

app.get("/", (req, res) => {
    console.log("pijas")
    res.send("sexo")
})

app.listen(PORT, () => {
    console.log("server running on port " + PORT)
})