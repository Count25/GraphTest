import{Schema, model} from "mongoose";

const UserSchema = new Schema({
    firstname: { type: String, required: true},
    lastname: { type: String},
    age: Number
});

export default model('User', UserSchema);