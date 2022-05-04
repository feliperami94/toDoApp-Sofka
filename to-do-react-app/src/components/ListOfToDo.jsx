import React, { useContext } from 'react'
import { Store } from './StoreProvider';

const ListOfToDo = () => {

    const {state, dispatch} = useContext(Store);

    const onCheckbox = (event, note) => {
      const checked = event.currentTarget.checked
      console.log(note)
      console.log(checked)
      dispatch({
        type:'update-note',
        payload: {
          ...note,
          done:checked
        }
      })
    }

  return (
    <div>
        <ul>
        {state.listOfNotes.map(note => {
            return <li style={note.done? {textDecoration: 'line-through'}:{}} key={note.id}>
                {note.title} <br />
                {note.message} <br />
                <input onChange={(event) => onCheckbox(event, note)} type="checkbox"/>
            </li>
         })}

        </ul>
    
    </div>
  )
}

export default ListOfToDo