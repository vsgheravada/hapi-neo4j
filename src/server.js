import Hapi from "hapi";
import Inert from "inert";
import Vision from "vision";
import HapiSwagger from "hapi-swagger";

import hapiConfig from "../config/hapiConfig";
import dbConfig from "../config/dbConfig";

const server = new Hapi.Server();
server.connection(hapiConfig);

const options = {
    info: {
        'title': 'API Documentation',
        'version': "1.0.0",
    }
};

server.route({
    method: "GET",
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], () => {
    server.start( (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Server running at:', server.info.uri);
        }
    });
});

/*server.start((err) => {
 if(err) throw err;
 console.log(`Server running at: ${server.info.uri}`);
 });*/
