import express from 'express';
import graphqlHTTP from 'express-graphql';

// http://dev.apollodata.com/tools/graphql-tools/mocking.html
import { makeExecutableSchema, addMockFunctionsToSchema, MockList } from 'graphql-tools';

import schema from './data/schema.js';
import resolverMap from './data/resolvers';

// https://github.com/marak/Faker.js/
import faker from 'faker';

// Create mocking functions to return fake data
const mocks = {
    MasterCategory: () => ({
        name: faker.commerce.department(),
        image: faker.image.image(),
        children: () => new MockList([2,6]),
    }),
    Category: () => ({
        name: faker.commerce.department(),
        image: faker.image.image(),
        children: () => new MockList([2,6]),
        products: () => new MockList([2,6]),
    }),
    Product: () => ({
        name: faker.commerce.productName(),
        image: faker.image.image(),
    }),
}

// Build the schema
const builtSchema = makeExecutableSchema({ typeDefs: schema });
// Apply the mock functions
addMockFunctionsToSchema({
  schema: builtSchema,
  mocks
});

const port = 4000;

// Start the server
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: builtSchema,
  graphiql: true,
}));
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);