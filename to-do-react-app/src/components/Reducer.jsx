function reducer(state, action){
    switch(action.type){
        case 'get-notes':
            const allNotesFetched = {
                ...state, listOfNotes: action.payload
            }
            console.log(allNotesFetched)
            return allNotesFetched

        case 'add-note':
            const newNote = action.payload;
            const newListOfNotesAddedOne = [...state.listOfNotes, newNote]
            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddedOne
            }

            return newStateAddNote
        case 'remove-note':
            const newListOfNotesAfterDeleting = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = {...state, listOfNotes: newListOfNotesAfterDeleting}
            return newStateWithNoteDeleted
        case 'update-note':
            const newListOfNotes = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newListOfNotesModified = [...newListOfNotes, action.payload];
            const newStateModifiedcheckbox = {...state, listOfNotes:newListOfNotesModified}
            return newStateModifiedcheckbox;
    }
}

export default reducer;