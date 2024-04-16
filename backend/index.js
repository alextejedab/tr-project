const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

let data = [{"pin":"1324","name":"Mimir", "bank": "visa", "balance":500},{"pin":"1234","name":"Gow", "bank": "mastercard","balance":1200}]

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/user', (req, res) => {
    user = data.find((user) => user.pin == req.query.pin)
    res.status(200).send(user)
})

app.get('/balance', (req, res) => {
    userIndex = data.findIndex((user) => user.pin == req.query.pin)

    if(userIndex !== null){
        data[userIndex].balance += parseFloat(req.query.qty)
    }
    user = data.find((user) => user.pin == req.query.pin)
    res.status(200).send(user)
})

app.listen(port, () => {
    console.log('App started')
})