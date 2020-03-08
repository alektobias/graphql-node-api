import dotenv from 'dotenv' 
import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import routes from './routes';
import schema from './graphql/schema';
class App {
  public server: express.Application;
  constructor() {
    dotenv.config();
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors({origin: process.env.ORIGIN}))
    this.server.use('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: process.env.NODE_ENV === 'development'
    }));
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;