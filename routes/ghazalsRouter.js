const express = require("express");

var { getGhazals, getGhazal, createGhazal, updateGhazal, deleteGhazal, getGhazalByPoetId } = require('../models/ghazals.js')
const ghazalsRouter = express.Router();

ghazalsRouter.get("/ghazals", async (req, res) => {
    const ghazals = await getGhazals()
    res.send(ghazals)
})

ghazalsRouter.get("/ghazals/:id", async (req, res) => {
    const id = req.params.id
    const ghazal = await getGhazal(id)
    res.send(ghazal)
})

ghazalsRouter.get("/ghazalsByPoet", async (req, res) => {
    const id = req.query.poet_id
    const ghazal = await getGhazalByPoetId(id)
    res.send(ghazal)
})


ghazalsRouter.post("/ghazals", async (req, res) => {
    const { content, poet_id } = req.body
    const ghazal = await createGhazal(content, poet_id)
    res.status(201).send(ghazal)
})

ghazalsRouter.put("/ghazals", async (req, res) => {
    const { content, poet_id, id } = req.body
    const ghazal = await updateGhazal(content, poet_id, id)
    res.status(201).send(ghazal)
})


ghazalsRouter.delete("/ghazals/:id", async (req, res) => {
    const id = req.params.id
    const ghazal = await deleteGhazal(id)
    res.send(ghazal)
})


module.exports = ghazalsRouter;