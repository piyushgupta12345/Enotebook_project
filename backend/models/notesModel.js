import  { model, Schema } from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const notesSchema = new Schema({
    user:{
        type: ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
}, {timestamps: true} );

const Notes = model('notes', notesSchema)
export default Notes;