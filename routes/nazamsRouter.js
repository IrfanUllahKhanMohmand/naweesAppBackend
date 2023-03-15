const express = require("express");

var { getNazams, getNazam, createNazam, updateNazam, deleteNazam, getNazamByPoetId } = require('../models/nazams')
const nazamsRouter = express.Router();

nazamsRouter.get("/nazams", async (req, res) => {
    const nazams = await getNazams()
    res.send(nazams)
})

nazamsRouter.get("/nazams/:id", async (req, res) => {
    const id = req.params.id
    const nazam = await getNazam(id)
    res.send(nazam)
})

nazamsRouter.get("/nazamsByPoet", async (req, res) => {
    // const id = req.params.id
    const id = req.query.poet_id
    const nazam = await getNazamByPoetId(id)
    res.send(nazam)
})

nazamsRouter.post("/nazams", async (req, res) => {
    const { title, content, poet_id } = req.body
    const nazam = await createNazam(title, content, poet_id)
    res.status(201).send(nazam)
})

nazamsRouter.put("/nazams", async (req, res) => {
    const { title, content, poet_id, id } = req.body
    const nazam = await updateNazam(title, content, poet_id, id)
    res.status(201).send(nazam)
})


nazamsRouter.delete("/nazams/:id", async (req, res) => {
    const id = req.params.id
    const nazam = await deleteNazam(id)
    res.send(nazam)
})


module.exports = nazamsRouter;