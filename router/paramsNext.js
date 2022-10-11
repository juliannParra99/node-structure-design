const express = require('express')

const paramsNext = express.Router();

// middleware that is specific to this router
paramsNext.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
  })
  
  
    paramsNext.get('/',(req, res)=>{
      res.send('this is the page about paramsAndNext')
    })
  
  //Route params: captur lo que se especifica en una una parte del codigo 
  
  paramsNext.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
    console.log(req.url)
  })
  //otro ejemplo separando los route params por una coma, tambiens se podri usar con un punto
  paramsNext.get('/flights/:from-:to', (req, res) => {
    res.send(req.params)
    console.log(req.path)
    
  })

  //encadenar distintos metodos http en un path(direccion)
  paramsNext.route('/book')
    .get((req, res) => {
      res.send('Get a random book')
    })
    .post((req, res) => {
      res.send('Add a book')
    })
    .put((req, res) => {
      res.send('Update the book')
    })
    ///
    //ejemplos del uso de next
    //lo que hace next(),es ejecutar un codigo asincrono. hace que se ejecute algo y cuando termina hce que se ejecute lo Siguiente, sin el enxt, se ejecuta uno, pero deja de ejecutar lo que sigue en la lista
    ///con dos
    paramsNext.get('/example/b', (req, res, next) => {
      console.log('the response will be sent by the next function ...')
      next()
    }, (req, res) => {
      res.send('Hello from B!')
    })
  
    //con tres
    const cb0 = function (req, res, next) {
      console.log('CB0')
      next()
    }
    
    const cb1 = function (req, res, next) {
      console.log('CB1')
      next()
    }
    
    const cb2 = function (req, res) {
      res.send('Hello from C!')
    }
    
    paramsNext.get('/example/c', [cb0, cb1, cb2])
  
    //
  
    module.exports = paramsNext;


