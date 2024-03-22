const express = require('express')
const fs = require('fs')
const geocode = require('./geocode.js')
const routes = require('./routes.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', async (req,res)=>{
    const address1 = req.query.address1
    const address2 = req.query.address2
    const vehicle = req.query.vehicle
    
    first_coordinates = await geocode(address1)
    second_coordinates = await geocode(address2)

    const start = first_coordinates.toString()
    const destination = second_coordinates.toString()

    console.log(start, destination)

    const result = await routes(start, destination, vehicle)
    res.send(result)

})

app.listen(port, ()=>{
    console.log('server is running on port '+port)
})
