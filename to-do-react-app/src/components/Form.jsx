import React, { useContext, useState } from 'react'
import { Store } from './StoreProvider';

const Form = () => {

    const onAdd = (event) => {
        event.preventDefault();
        if (title && message){
            dispatch({
                type: 'add-note',
                payload: {
                    title,
                    message
                }
            })
        }
    }

    const {state, dispatch} = useContext(Store);

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const addingTitle = (e) =>{
        setTitle(e.target.value);
    }

    const addingMessage = (e) =>{
        setMessage(e.target.value);
    }


  return (
    <form action="">
        <label >Title: </label>
        <input onChange={addingTitle} type="text" name="title" />
        <label>Message: </label>
        <input onChange={addingMessage} type="text" name='message'/>
        <button onClick={(e) => onAdd(e)}>Add note</button>

    </form>
  )
}

export default Form