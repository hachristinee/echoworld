var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('GET /')
    res.status(200)
    res.json({ message: 'Welcome. Confirmed you can reach this'})
})

app.get('/ping', (req, res) => {
    console.log('GET /ping')
    res.status(200)
    res.json({ message: 'Successfully /ping this'}
    )
})

app.post('/echo', (req, res) => {
    console.log ('POST /echo')
    console.log('Received:', req.body)
    res.status(200)
    res.send({response: req.body})

})

app.listen(3000, ()=> {
    console.log(`Server is running on port http://localhost:3000`)

  })