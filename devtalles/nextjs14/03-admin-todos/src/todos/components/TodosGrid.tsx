'use client'
import {Todo} from '@prisma/client'
import { TodoItem } from './TodoItem'
import * as todosApi from '../helpers/todos'
import { updateTodo } from '../helpers/todos';
import { useRouter } from 'next/navigation';
interface Props {
  todos: Todo[]
}
export const TodosGrid = (props: Props) => {
  const router = useRouter()

  const toggleTodo = async (id: string, completed: boolean) => {
    const updateTodo = await todosApi.updateTodo(id, completed)
    // refresca la vista de la ruta actual
    router.refresh()
    return updateTodo
  }

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
