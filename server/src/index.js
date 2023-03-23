const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer} = require("@apollo/server/standalone");
const typeDefs = require("./schema");

const startApolloServer = async () => {
    const server = new ApolloServer({ typeDefs });
    const {url} = await startStandaloneServer(server);
    console.log (`
        server is running!
        Query at ${url}
       `
    )
}

startApolloServer();