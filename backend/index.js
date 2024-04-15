const express = require('express')
const data = require("./data.json")
const app = express()
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send(JSON.parse(fs.readFileSync("data.json", 'utf8', (err) => {
        if(err) throw err
    })))
})

app.post('/', (req, res) => {
    data.push({
        "pin": "1324",
        "name": "mimir gow"
    })
    fs.writeFile("data.json", JSON.stringify(data
    ), (err) => {
        if(err) throw err
    })
    res.status(201).send('creating')
})

app.put('/:id', (req, res) => {
    res.sendStatus(204)
})

app.delete('/:id', (req, res) => {
    res.sendStatus(204)
})

app.listen(port, () => {
    console.log('App started')
})