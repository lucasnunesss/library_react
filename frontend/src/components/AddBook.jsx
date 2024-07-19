import { useReducer, useState } from "react"
import INITIAL_BOOKS from "./initial"
import reducer from "./reducer"



let initialId = 1
const AddNewBook = () => {
  const [book, setBooks] = useState({title: "", author: ""})
  const [state, dispatch] = useReducer(reducer, INITIAL_BOOKS)

  const addBook = (livro) => {
    
    return dispatch({ type: "CONFIRM", payload: {
      title: livro.title
    } })
  }

  
  return (
    <form onSubmit={e => e.preventDefault()}>
      
      <input type="text" name="title" id="" placeholder="Title" onChange={e => setBooks({...book,title: e.target.value})} />
      <input type="text" name="author" id="" placeholder="Author" />
      <input type="text" name="total" id="" placeholder="Total Pages" />
      <input type="text" name="complete" id="" placeholder="Completed Pages" />
      <input type="checkbox" name="" id="" />
      <button>Cancel</button>
      <button onClick={() =>  addBook(book)
      }>Add</button>
      {state.books ? (
        state.books.map((data, index) => (
          <p key={index}>{data.title}</p>
        ))
      ) : null}
    </form>
  )
}

export default AddNewBook