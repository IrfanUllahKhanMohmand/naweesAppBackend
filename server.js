var express = require('express');
const poetsRouter = require("./routes/poetsRouter");
const ghazalsRouter = require("./routes/ghazalsRouter");
const nazamsRouter = require("./routes/nazamsRouter");
const shersRouter = require("./routes/shersRouter");
const categoryRouter = require("./routes/categoryRouter");
const catNazamsRouter = require("./routes/catNazamsRouter");
const catGhazalsRouter = require("./routes/catGhazalsRouter");
const catShersRouter = require("./routes/catShersRouter");
const cors = require("cors");

const app = express()
app.use(express.static(__dirname + '/'));
app.use(express.json({ limit: '50mb' }))
app.use(cors())
app.use(poetsRouter)
app.use(ghazalsRouter)
app.use(nazamsRouter)
app.use(shersRouter)
app.use(categoryRouter)
app.use(catNazamsRouter)
app.use(catGhazalsRouter)
app.use(catShersRouter)


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

















