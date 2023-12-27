//import json-server
const jsonserver = require('json-server')

// create a server application using json server

const restserver = jsonserver.create()


// setup path for db.json

const router = jsonserver.router('db.json')

// return a middleware used by json server
const middleware = jsonserver.defaults()

//setup port
const port =3001

// use in server
restserver.use(middleware)
restserver.use(router)

// to run a port
restserver.listen(port,()=>{
console.log('rest server listening on port' +port);
})