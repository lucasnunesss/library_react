export default function reducer(state, action){
  switch(action.type){
  
    case ("CONFIRM"):{
   
      return {...state, books: [...state.books, { title: action.payload.title}]}
    }
  }
}