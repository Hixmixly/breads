//dependencies
const express = require ('express')

//configuration
require ('dotenv').config()
const PORT = process.env.PORT
console.log (PORT)

//routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//listen
app.liesten(PORT, () => {
    console.log ('listening on port', PORT)
})