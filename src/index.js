/** Creaiamo un server */

import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

import{connect} from "./database";

const app= express();
connect();

app.get('/', (req, res)=> { 
    res.json({
        message:'Hello world'
    })
});


app.use('/graphql', graphqlHTTP({
    /**con graphiql noi accediamo allo strumento 
     per vedere le funzioni del server appena creato. */
     graphiql: true,
     schema: schema,
     context: {
         messageId: 'test'
     }

}));

app.listen(3000, () => console.log ('Server on port 3000'));