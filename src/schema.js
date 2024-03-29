/** Qui definiamo un indice di cosa può fare */

import{ makeExecutableSchema } from "graphql-tools";
import{resolvers }from "./resolvers";


const typeDefs= `

type Query {
    hello: String,
    greet(name: String!): String,
    tasks: [Task] 
    Users: [User]  
}
#Qua definiamo il tipo Task
type Task{
    _id: ID,
    title: String!,
    description: String!,
    number: Int
}

type User {
    _id: ID,
    firstname: String!,
    lastname: String!,
    age: Int
}
#qua invece creiamo un type che può modificare le task con un input da tastiera
type Mutation{
    createTask(input: TaskInput) : Task
    createUser(input: UserInput) : User
    deleteUser(_id: ID) : User
    updateUser(_id: ID, input: UserInput): User
}
input TaskInput {
    title: String!,
    description: String!,
    number: Int
}

input UserInput {
    firstname: String!,
    lastname: String!,
    age: Int
}

`;  

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})