const express = require("express");
var { getPoets, getPoet, createPoet, updatePoet, deletePoet } = require('../models/poets.js')
const poetsRouter = express.Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './images/')     // './images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage });

poetsRouter.post("/poets", upload.single('pic'), async (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        var imgsrc = 'http://192.168.18.185:8080/images/' + req.file.filename
        const { name, father_name, birth_date, death_date, description } = req.body
        const poet = await createPoet(name, father_name, birth_date, death_date, description, imgsrc)
        return res.status(201).send(poet)
    }
})

poetsRouter.get("/poets", async (req, res) => {
    const poets = await getPoets()
    res.send(poets)
})

poetsRouter.get("/poets/:id", async (req, res) => {
    const id = req.params.id
    const poet = await getPoet(id)
    res.send(poet)
})






poetsRouter.put("/poets", upload.single('pic'), async (req, res) => {
    if (!req.file) {
        const { name, father_name, birth_date, death_date, description, pic, id } = req.body
        const poet = await updatePoet(name, father_name, birth_date, death_date, description, pic, id)
        return res.status(201).send(poet)
        // console.log("No file upload");
    } else {
        var imgsrc = 'http://192.168.18.185:8080/images/' + req.file.filename
        const { name, father_name, birth_date, death_date, description, id } = req.body
        const poet = await updatePoet(name, father_name, birth_date, death_date, description, imgsrc, id)
        return res.status(201).send(poet)
    }
})


poetsRouter.delete("/poets/:id", async (req, res) => {
    const id = req.params.id
    const poet = await deletePoet(id)
    res.send(poet)
})


module.exports = poetsRouter;