import{ tasks } from "./sample";
import  User from "./models/User";
export const resolvers = {

    /** Qui invece si effettua quello che può fare a partire dall'indice */
    Query:{
        hello: () => {
            return 'Hello World with Graphql'
        },
        greet ( root, {name}, context){
            console.log(context)
            return `Hello ${name}!`;
        },
        tasks(){
            return tasks;
        }, 
        async Users() {
            return await User.find();

        }
    },
    Mutation:{
        createTask (_, { input}) {
            /** con questo genera il seguente ID per il task */
            input._id=tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser (_, {input}){
            const newUser = new User(input)
            await newUser.save();
            return newUser;   
        },
        async deleteUser (_, {_id}) {
            console.log("Utente Eliminato");
            return await User.findByIdAndDelete(_id) ;         
        },
        async updateUser(_, {_id, input}){
            console.log("Utente Modificato");
            return await User.findByIdAndUpdate(_id, input, {new: true});
        }
        
    }
};

