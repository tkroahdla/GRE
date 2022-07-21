const { gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    people: [User]
  }
  type User {
    _id: ID
    name: String
    friends: [User]
  }
`;

module.exports = typeDefs;
