console.log("Hola Mundo")


const express = require('express')
const server = express()
const path = require("path")

//enrutamiento a hola mundo
server.get('/hola_mundo', function (req, res) {
  const filepath = path.join(__dirname, 'hola_mundo.html')
  res.sendFile(filepath)
})

//enrutamiento a ejercicios
server.get('/ejercicios', function (req, res) {
  const filepath = path.join(__dirname, 'src', 'views', 'ejercicios.html')
  res.sendFile(filepath)
  // res.sendFile(__dirname + 'src/views/ejercicios.html')
})

const publicpath = path.join(__dirname, 'src', 'public')//acceso a la carpeta publica 
server.use(express.static(publicpath))

const viewpath = path.join(__dirname, 'src', 'views')//acceso a la carpeta publica 
server.use(express.static(viewpath))


server.listen(4500)