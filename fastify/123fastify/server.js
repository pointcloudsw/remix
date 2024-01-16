import fastify from 'fastify';

const app = fastify({
    logger: true
});

app.register(import('./app.js'));

app.listen(3000);