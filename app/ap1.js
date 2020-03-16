const jwt = require('jsonwebtoken')

/*
    Some constants
*/
const SECRET_KEY =
    'sharedkey'

const context = ({ req }) => {
    // get the user token from the headers
    console.log(req.url)
    const token = req.headers.authorization || ''    
    // console.log('token',token)
    try {
        const splitToken = token.split(' ')[1]
        var decoded = jwt.verify(splitToken, SECRET_KEY)
        req.user = decoded
        return {user:req.user}
    } catch (e) {
        // throw new AuthenticationError(
        //     'Authentication token is invalid, please log in',
        // )
    }
}

const express = require('express');
const { ApolloServer, gql, AuthenticationError} = require('apollo-server-express');
const typeDefs = gql`
  type Query {
    hello: String
    login(user:String,password:String): String
    logout: Boolean
    szone1: String
  }
`;
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    szone1: (root,{user,password},context) => {
        if(!context.user)
            throw new AuthenticationError('not login')
        else{
            console.log(context.user)
            return 'secret garden'
        }
    },
    login: (root,{user,password},context) => {
        if(user=='reco' && password=='rita'){
            const token = jwt.sign({ user:user },SECRET_KEY)
            return token            
        } else {
            throw new AuthenticationError('login failure')
        }
    },
    logout: ()=> 'logout/remove req.header.Authorization = null ,it is ok'
  },
};
const server = new ApolloServer({ typeDefs, resolvers,context });
const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);