import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fastify from 'fastify';
import fastifyAutoload from '@fastify/autoload';
import fastifyJwt from '@fastify/jwt';

export default async function(app, opts){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    app.register(fastifyAutoload, {
        dir: join(__dirname, 'routes')
    });

    app.register(fastifyJwt, {
        secret: 'secret'
    });

    app.decorate('authenticate', async function (rqst, rply){
        try {
            await rqst.jwtVerify();
        } catch (err){
            rply.send(err);
        }
    });
}