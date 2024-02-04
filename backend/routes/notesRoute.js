import express from 'express';
import fetchUser from '../middlewares/fetchUser.js';
// import Notes from '../models/notesModel.js';
import {addNote, fetchAllNotes, deleteNote} from '../controllers/notesController.js'
const router = express.Router();

router.post('/addnote', addNote)
router.get('/fetchallnotes', fetchUser, fetchAllNotes)
router.get('/deletenote/:id', fetchUser, deleteNote)


export default router;