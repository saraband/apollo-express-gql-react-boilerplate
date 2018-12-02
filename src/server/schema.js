import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql';
import db from './models';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    hello: {
      resolve: () => 'Hello world !'
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;