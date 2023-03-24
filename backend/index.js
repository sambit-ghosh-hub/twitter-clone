
const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
 res.send('hello world')
})

app.post('/hello', (req, res) => {
 res.send('hello post')
})

app.get('/', (req, res) => {
 res.send('Welcome')
})

app.listen(3000,()=>{
 console.log('Server started at http://localhost:3000')
})
