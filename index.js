import express from "express";
//path y url son modulos de node por lo que es bueno conocer  la intereaccion entre los modulos de aplicacion que provee express y los de node
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import  indexRoutes from "./routes/index.js";

const app = express();
app.use('/', indexRoutes)

//subguion subguion dirname(__dirname) ppara decir que es algo interno de nuestra aplicacion
//GEMERA UNA RUTA ABSOLUTA PARA QUE EL PROGRAMA SE PUEDA EJECUTAR EN CUALQUIER SISTEMA OPERATIVO Y SIN IMPORTAR EN QUE CARPETA SE ALMACENE; VA A CONSEGUIR SIEMPRE LA RUTA
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(join(__dirname, "views"));
//set
//primera parte de res.render( 'archivo que voy a renderizar', 'ruta del directorio'); YA DEFINIDO TODO LO QUE SIGNIFICA EL DIRNAME, LLAMA A JOIN PARA QUE CONCTENE LA RUTA QUE ALVERGA  __DIRNAME CON LA CARPETA VIEWS, ESTO ES ASI POR QUE DEPENDE EL SISTEMA OPERATIVO LA RUTA PARA CONCATENARLO CON LA CARPETA VIEWS ES DISTINTA, Y JOIN NOS SOLUCIONA ESO.
app.set("views", join(__dirname, "views"));
//el template engine que se va a utilizar
app.set("view engine", "ejs");


const port = 3000;

app.listen(port);

console.log(`Server on port: ${port}`);
