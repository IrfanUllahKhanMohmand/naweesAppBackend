const express = require("express");

var { getShers, getSher, createSher, updateSher, deleteSher, getShersOnPoetId } = require('../models/shers')
const shersRouter = express.Router();

shersRouter.get("/shers", async (req, res) => {
    const shers = await getShers()
    res.send(shers)
})

shersRouter.get("/shers/:id", async (req, res) => {
    const id = req.params.id
    const sher = await getSher(id)
    res.send(sher)
})

shersRouter.get("/shersByPoet", async (req, res) => {
    const id = req.query.poet_id
    const sher = await getShersOnPoetId(id)
    res.send(sher)
})


shersRouter.post("/shers", async (req, res) => {
    const { content, poet_id } = req.body
    const sher = await createSher(content, poet_id)
    res.status(201).send(sher)
})

shersRouter.put("/shers", async (req, res) => {
    const { content, poet_id, id } = req.body
    const sher = await updateSher(content, poet_id, id)
    res.status(201).send(sher)
})


shersRouter.delete("/shers/:id", async (req, res) => {
    const id = req.params.id
    const sher = await deleteSher(id)
    res.send(sher)
})


module.exports = shersRouter;