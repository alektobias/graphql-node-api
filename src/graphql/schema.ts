import { makeExecutableSchema } from 'graphql-tools';



const users: any[] = [
  {
    id: 1,
    name: 'John',
    email: 'john@email.com'
  },
  {
    id: 2,
    name: 'Jack',
    email: 'jack@email.com'
  },
  {
    id: 3,
    name: 'Karen',
    email: 'karen@email.com'
  }
] 

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }


  type Query {
    allUsers: [User!]! 
  }
`;

const resolvers = {
  Query: {
    allUsers: () => users
  }
}

export default makeExecutableSchema({typeDefs, resolvers});