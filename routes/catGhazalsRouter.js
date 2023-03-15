const express = require("express");

var { getCatGhazals, getCatGhazal, createCatGhazal, updateCatGhazal, deleteCatGhazal, getCatGhazalByCatId } = require('../models/catghazals.js')
const catGhazalsRouter = express.Router();

catGhazalsRouter.get("/catghazals", async (req, res) => {
    const ghazals = await getCatGhazals()
    res.send(ghazals)
})

catGhazalsRouter.get("/catghazals/:id", async (req, res) => {
    const id = req.params.id
    const ghazal = await getCatGhazal(id)
    res.send(ghazal)
})


catGhazalsRouter.get("/ghazalsByCategory", async (req, res) => {
    const id = req.query.cat_id
    const ghazal = await getCatGhazalByCatId(id)
    res.send(ghazal)
})


catGhazalsRouter.post("/catghazals", async (req, res) => {
    const { content, cat_id } = req.body
    const ghazal = await createCatGhazal(content, cat_id)
    res.status(201).send(ghazal)
})

catGhazalsRouter.put("/catghazals", async (req, res) => {
    const { content, cat_id, id } = req.body
    const ghazal = await updateCatGhazal(content, cat_id, id)
    res.status(201).send(ghazal)
})


catGhazalsRouter.delete("/catghazals/:id", async (req, res) => {
    const id = req.params.id
    const ghazal = await deleteCatGhazal(id)
    res.send(ghazal)
})


module.exports = catGhazalsRouter;