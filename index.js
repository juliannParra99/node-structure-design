const express = require('express')
const app = express()
const port = 3000
const birds = require('./router/bird')
const paramsNext = require('./router/paramsNext')
const methods  = require('./router/httpMethods')

app.use('/static',express.static( __dirname + '/public'));

//manejador de errores

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
//traigo los archivos  de la carpeta routes
//voy a usar en esa ruta lo que traigo de el archivo bird contenido en la constante birds
app.use('/bird', birds)
app.use('/paramsNext',paramsNext)
app.use('/methods',methods)


  
  //manejador de respuestas  404; va al final del resto de contenido
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
}); 

app.listen(port, () => {
  console.log(`server on port: ${port}`)
})