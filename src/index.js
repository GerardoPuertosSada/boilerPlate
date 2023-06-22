const server = require('./src/server')




server.listen(PORT, () => {
  console.log(`Se inicio correctamente el servidor en el puerto: ${PORT}`);
}); //ESCUCHO EL SERVIDOR LOCALHOST EN EL PUERTO QUE PUSE

