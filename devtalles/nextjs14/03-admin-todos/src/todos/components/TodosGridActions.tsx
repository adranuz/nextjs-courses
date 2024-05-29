'use client'
import {Todo} from '@prisma/client'
import { TodoItem } from './TodoItem'
import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';
interface Props {
  todos: Todo[]
}
export const TodosGridActions = (props: Props) => {
  // const router = useRouter()
  // const toggleTodo = async (id: string, completed: boolean) => {
  //   const updateTodo = await todosApi.updateTodo(id, completed)
  //   // refresca la vista de la ruta actual
  //   router.refresh()
  //   return updateTodo
  // }

  return (
    <div>
      <h1>Todos grid</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
        {props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))}
      </div>
    </div>
  )
}
