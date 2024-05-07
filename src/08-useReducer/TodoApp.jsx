import { useReducer } from "react"
import { todoReducer } from "./todoReducer";


const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Aprender React',
    done: false
  }
];

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, initialState );


  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>TodoApp</li>
        <li>TodoApp</li>
        <li>TodoApp</li>
      </ul>
    

    </>
  )
}
