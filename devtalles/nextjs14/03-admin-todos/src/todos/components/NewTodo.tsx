'use client';

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";


export const NewTodo = () => {
  const router = useRouter()
  const [description, setDescription] = useState('')
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (description.trim().length === 0) return
    const newTodo = todosApi.createTodo(description)
    setDescription('')
    router.refresh()
  }
  const onDeleteCompleted = () => {
    todosApi.deleteCompleted()
    router.refresh()
  }
  return (
    <form  className='flex w-full'>
      <input type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        onChange={ (e) => {setDescription(e.target.value)}}
        value={description}
        />

      <button
        type='submit'
        onClick={onSubmit}
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        >
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={onDeleteCompleted}
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Borrar Completados
      </button>


    </form>
  )
}