import './App.css'
import StoreProvider from './components/StoreProvider'
import ListOfToDo from './components/ListOfToDo'

function App() {

  return (
    <StoreProvider>
      <h1>Fun To Do List!</h1>
      <ListOfToDo/>
    </StoreProvider>
     
  )
}

export default App
