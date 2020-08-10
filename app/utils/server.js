import Pretender from 'pretender';

const server = new Pretender();

server.prepareBody = JSON.stringify;

server.put('/foos/1', () => [500, {}, {}]);

server.get('/foos/1', () => [
  200,
  {},
  {
    foo: {
      id: 1,
      name: 'Foo 1',
    },
  },
]);

export default server;
