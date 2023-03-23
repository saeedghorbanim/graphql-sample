const gql = require("graphql-tag")

const typeDefs = gql `

    type Query {
        tracksForHome: [Track!]!
    }

    "A Track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        phot: String
    }
`;

module.exports = typeDefs;