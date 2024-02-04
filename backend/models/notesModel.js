import  mongoose ,{ model, Schema } from 'mongoose';

const notesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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