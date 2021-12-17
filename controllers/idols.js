const { v4: uuidv4 } = require('uuid');
let idols = [];

const getIdols = (req, res) => {
    res.send(idols)
}

const createIdol = (req, res) => {
    const idol = req.body
    idols.push({ ...idol, id: uuidv4() })
    res.send(`idol ${idol.fname} posted`)
}

const getIdol = (req, res) => {
    const { id } = req.params
    const getIdol = idols.find((idol) => idol.id === id)
    res.send(getIdol)
}

const updateIdol = (req, res) => {
    const { id } = req.params
    const { fname, lname, age } = req.body

    const idolUpdated = idols.find((idol) => idol.id === id)

    if (fname) {
        idolUpdated.fname = fname
    }
    if (lname) {
        idolUpdated.lname = lname
    }
    if (age) {
        idolUpdated.age = age
    }

    res.send(`idol id ${id} edited`)
}

const deleteIdol = (req, res) => {
    const { id } = req.params
    idols = idols.filter((idol) => idol.id !== id)
    res.send(`idol id ${id} deleted`)
}

module.exports = { getIdols, createIdol, getIdol, updateIdol, deleteIdol }