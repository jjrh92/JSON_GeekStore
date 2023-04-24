const jsonServer = require ("json-server"); // IMPORTANDO LIBREARIA JSON-SERVER
const server = jsonServer.create ();
const router = jsonServer.router ("db.json");
const middlewares = jsonServer.defaults ();
const port = process.env.PORT || 3000; // Aca puedes usar cualquier numero de puerto. Elegimos usar el puerto 3000.

server.use (middlewares);
server.use (router);
server.listen (port);