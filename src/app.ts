import express from 'express';
import graphqlHTTP from 'express-graphql';
import routes from './routes';
import schema from './graphql/schema';
class App {
  public server: express.Application;
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());

    this.server.use('/graphql', graphqlHTTP({
      schema: schema,
    }));
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;