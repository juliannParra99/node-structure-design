const express = require('express')
const methods = express.Router()

// middleware that is specific to this router
methods.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
    })

    methods.get('/', (req, res) => {
  res.send('Hello World! this is my page of methods')
})

methods.get('/user', (req,res)=>{
    res.send('this page is for users')
    console.log('holiss')
})

methods.get('/rey', (req,res)=>{
  res.status(500)
    res.send('hola mi rey,te mnando mis cordiales saludos')
})


methods.delete('/user', (req, res) => {
  res.send('considerate borrado mi bro')
})

//los simbolos "?","+","*","()" y "/valor primitivo/", le dan mas flexibilidad a la hora de llamar al routing en el navegador
methods.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})


module.exports = methods;

  
