const express = require("express")
const mongoose = require("mongoose")
const idolRoutes = require("./routes/idol")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

//*? MIDDLEWARES
app.use(express.json())
app.use("/api", idolRoutes)

//*? ROUTES
app.get("/", (req, res) => {
    res.send("api working")
})

//*? MONGODB CONNECTION
mongoose.connect(
    process.env.MONGODB_URI
).then((req, res) => {
    console.log("mongodb atlas connected")
}).catch((err) => {
    console.error(err)
})

app.listen(PORT, () => {
    console.log("server running on port " + PORT)
})