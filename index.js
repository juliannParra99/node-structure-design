const express = require('express')
const app = express()


//middlewew: cuando se pide una solicitud en el navegador (request), se guarda la hora de el momento en que se relizo la solicitud
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  console.log(req.requestTime)
  next()
}
 //aca se ejecuta el middlewere
app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

app.listen(3000, ()=>
console.log(`server on port ${3000}`)
)