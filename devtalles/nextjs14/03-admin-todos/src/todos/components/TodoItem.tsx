import { Todo } from '@prisma/client'
import styles from './TodoItem.module.css'

import {startTransition, useOptimistic} from 'react'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
interface Props {
  todo: Todo,
  toggleTodo: (id: string, completed: boolean) => Promise<Todo|void>
}
export const TodoItem = ({todo, toggleTodo}: Props) => {
	// useOptimistic es como useState, pero apoya a reflejar el nuevo estado instantaneamente
	// sin esperar al resultado de la operación asincrona
	// su segundo argumento es una función que recibe el estado actual y el nuevo valor
	// y debera retornar el valor deseado
	const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
		todo, (state, newCompletedValue: boolean) => {
			return {...state, completed: newCompletedValue}
		}
	)

	// startTransition es un wrapper para poder usar use optimistic
	// a la hora de mutar el todo, mandamos el valor que queremos ver reflejado
	const onToggleTodo = async () => {
		try {
			startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed))
			await toggleTodo(todoOptimistic.id, !todoOptimistic.completed)
		} catch (error) {
			startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed))
		}
	}

  return (
		<div className={todoOptimistic.completed ? styles.todoDone : styles.todoPending}>
			<div className="flex flex-col flex-wrap sm:flex-row justify-start items-center gap-4">
				<div 
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100 ${todoOptimistic.completed ? 'bg-blue-100' : 'bg-red-100'}`} 
          onClick={onToggleTodo}
        >
					{todoOptimistic.completed ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} color='gray' />}
				</div>
				<div className='text-center sm:text-left'>{todoOptimistic.description}</div>
			</div>
		</div>
	);
}
