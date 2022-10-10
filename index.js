const express = require('express')
const app = express()
const port = 3000
const birds = require('./router/bird')

app.use('/static',express.static( __dirname + '/public'));

//manejador de errores

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
//voy a usar en esa ruta lo que traigo de el archivo bird contenido en la constante birds
app.use('/bird', birds)




app.get('/', (req, res) => {
  res.send('Hello World! how are you my friends')
})

app.get('/user', (req,res)=>{
    res.send('this page is for users')
    console.log('holiss')
})

app.get('/jej', (req,res)=>{
  res.status(500)
    res.send('hola mi rey que busca el error')
})


app.delete('/user', (req, res) => {
  res.send('considerate borrado mi bro')
})

//los simbolos "?","+","*","()" y "/valor primitivo/", le dan mas flexibilidad a la hora de llamar al routing en el navegador
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})


//Route params: captur lo que se especifica en una una parte del codigo 

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
  console.log(req.url)
})
//otro ejemplo separando los route params por una coma, tambiens se podri usar con un punto
app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params)
  console.log(req.path)
  
})
//encadenar distintos metodos http en un path(direccion)
app.route('/book')
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
  app.get('/example/b', (req, res, next) => {
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
  
  app.get('/example/c', [cb0, cb1, cb2])

  //

  
  
  //manejador de respuestas  404; va al final del resto de contenido
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
}); 

app.listen(port, () => {
  console.log(`server on port: ${port}`)
})