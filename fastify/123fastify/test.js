import tape from 'tape';
import fastify from 'fastify';
import app from './app.js';

test('hello world', async ({ deepEqual }) => {
    const server = fastify();
    server.register(app);

    const res = await server.inject('/');

    deepEqual(res.json(), { hello: 'world' });

    await server.close();
});

test('a/b/c', async ({ deepEqual }) => {
    const server = fastify();
    server.register(app);

    const res = await server.inject('/a/b/c');

    deepEqual(res.json(), { hello: 'from d' });

    await server.close();
});
