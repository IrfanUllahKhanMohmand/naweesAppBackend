const express = require("express");

var { getCatShers, getCatSher, createCatSher, updateCatSher, deleteCatSher, getCatShersOnCatId } = require('../models/catshers')
const catShersRouter = express.Router();

catShersRouter.get("/catshers", async (req, res) => {
    const shers = await getCatShers()
    res.send(shers)
})

catShersRouter.get("/catshers/:id", async (req, res) => {
    const id = req.params.id
    const sher = await getCatSher(id)
    res.send(sher)
})

catShersRouter.get("/shersByCategory", async (req, res) => {
    const id = req.query.cat_id
    const sher = await getCatShersOnCatId(id)
    res.send(sher)
})

catShersRouter.post("/catshers", async (req, res) => {
    const { content, cat_id } = req.body
    const sher = await createCatSher(content, cat_id)
    res.status(201).send(sher)
})

catShersRouter.put("/catshers", async (req, res) => {
    const { content, cat_id, id } = req.body
    const sher = await updateCatSher(content, cat_id, id)
    res.status(201).send(sher)
})


catShersRouter.delete("/catshers/:id", async (req, res) => {
    const id = req.params.id
    const sher = await deleteCatSher(id)
    res.send(sher)
})


module.exports = catShersRouter;