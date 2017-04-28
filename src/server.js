import Hapi from "hapi";
import inert from "inert";
import vision from "vision";
// import hapi-swagger from "hapi-swagger";

import hapiConfig from "../config/hapiConfig"; 
import dbConfig from "../config/dbConfig"; 

const server = new Hapi.Server();
server.connection(hapiConfig);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.start((err) => {
	if(err) throw err;
	console.log(`Server running at: ${server.info.uri}`);
});
