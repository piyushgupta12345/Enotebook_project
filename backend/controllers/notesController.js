import Notes from "../models/notesModel.js"

const addNote = async (req, res) => {
    try {
        // data fetch from request ki body
        const { title, description, tag } = req.body;

        // validation
        if (!title || !description || !tag) {
            return res.status(500).json(
                {
                    success: false,
                    msg: "All feilds are required !!",
                }
            )
        }

        // note add
        const note = await Notes.create({ title, description, tag })

        res.status(201).json(
            {
                success: true,
                msg: "Note add successfully !!",
                note: note
            }
        )

    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "Add notes process failed !!",
            }
        )
    }
}

const deleteNote = async (req, res) =>{
    try {
        const note = Notes.findByIdAndDelete(req.userId)
        res.status(201).json(
            {
                success: true,
                msg: "Note delete successfully !!",
                note:note
            }
        )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "delete note process falied !!"
            }
        )
    }
}

const fetchAllNotes = async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.userId })
        res.status(201).json(
            {
                success: true,
                msg: "Fetch all notes !!",
                notes: notes,
            }
        )
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                success: false,
                msg: "Fetch all notes falied !!"
            }
        )
    }
}


export { fetchAllNotes, addNote, deleteNote };