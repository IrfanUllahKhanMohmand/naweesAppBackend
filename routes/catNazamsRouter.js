const express = require("express");

var { getCatNazams, getCatNazam, createCatNazam, updateCatNazam, deleteCatNazam } = require('../models/catnazams')
const catNazamsRouter = express.Router();

catNazamsRouter.get("/catnazams", async (req, res) => {
    const nazams = await getCatNazams()
    res.send(nazams)
})

catNazamsRouter.get("/catnazams/:id", async (req, res) => {
    const id = req.params.id
    const nazam = await getCatNazam(id)
    res.send(nazam)
})

catNazamsRouter.get("/nazamsByCategory", async (req, res) => {
    const id = req.query.cat_id
    const nazam = await getCatNazamByCatId(id)
    res.send(nazam)
})

catNazamsRouter.post("/catnazams", async (req, res) => {
    const { title, content, cat_id } = req.body
    const nazam = await createCatNazam(title, content, cat_id)
    res.status(201).send(nazam)
})

catNazamsRouter.put("/catnazams", async (req, res) => {
    const { title, content, cat_id, id } = req.body
    const nazam = await updateCatNazam(title, content, cat_id, id)
    res.status(201).send(nazam)
})


catNazamsRouter.delete("/catnazams/:id", async (req, res) => {
    const id = req.params.id
    const nazam = await deleteCatNazam(id)
    res.send(nazam)
})


module.exports = catNazamsRouter;