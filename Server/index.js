import express from 'express'
import { default as mongoose, Schema } from 'mongoose'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
app.use(cors())
app.use(express.json())

const sonSchema = new Schema({
    image: { type: String, required: true },
    text: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true })


const Sons = mongoose.model("Sons", sonSchema)
app.get('/sons', async (req, res) => {
    try {
        const sons = await Sons.find({})
        res.send(sons)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.get('/sons/:id', async (req, res) => {
    try {
        const sons = await Sons.findById(req.params.id)
        res.send(sons)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.post('/sons', async (req, res) => {
    try {
        const son = new Sons({
            image: req.body.image,
            text: req.body.text,
            price: req.body.price
        })
        await son.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.delete('/sons/:id', async (req, res) => {
    try {
        const sons = await Sons.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("db not connect" + err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})