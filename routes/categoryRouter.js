const express = require("express");
var { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../models/category.js')
const categoryRouter = express.Router();
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

categoryRouter.post("/category", upload.single('pic'), async (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        var imgsrc = 'http://192.168.18.185:8080/images/' + req.file.filename
        const { name, description } = req.body
        const category = await createCategory(name, description, imgsrc)
        return res.status(201).send(category)
    }
})

categoryRouter.get("/category", async (req, res) => {
    const categories = await getCategories()
    res.send(categories)
})

categoryRouter.get("/category/:id", async (req, res) => {
    const id = req.params.id
    const category = await getCategory(id)
    res.send(category)
})




categoryRouter.put("/category", upload.single('pic'), async (req, res) => {
    if (!req.file) {
        const { name, description, pic, id } = req.body
        const category = await updateCategory(name, description, pic, id)
        return res.status(201).send(category)
        // console.log("No file upload");
    } else {
        var imgsrc = 'http://192.168.18.185:8080/images/' + req.file.filename
        const { name, description, id } = req.body
        const category = await updateCategory(name, description, imgsrc, id)
        return res.status(201).send(category)
    }
})


categoryRouter.delete("/category/:id", async (req, res) => {
    const id = req.params.id
    const category = await deleteCategory(id)
    res.send(category)
})


module.exports = categoryRouter;