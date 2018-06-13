const graphql = require('graphql')
const _ = require('lodash')
const axios = require('axios')
 const {
     GraphQLObjectType,
     GraphQLString,
     GraphQLInt,
     GraphQLSchema
 } = graphql

const users = [
    {id: '1', firstName: 'Ansh', age: 20},
    {id: '2', firstName: 'Ram', age: 21},
    {id: '3', firstName: 'Sham', age: 20}
]

 const UserType = new GraphQLObjectType({
     name: 'User',
     fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt}
     }
 })

 const RootQuery = new GraphQLObjectType({
     name: 'RootQueryType',
     fields: {
         user: {
             type: UserType,
             args: {id: {type: GraphQLString}},
             resolve(parentValue, args) { 
                return axios.get(`http://localhost:3000/users/${args.id}`)
                .then(resp => resp.data)    // As data is nested in {data}
                .then(data => data)
             }
         }
     }
 })

 module.exports = new GraphQLSchema({
    query: RootQuery 
})
