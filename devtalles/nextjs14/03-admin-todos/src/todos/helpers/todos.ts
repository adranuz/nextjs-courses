// instrucciones para realizar el posteo http

import { auth } from "@/auth";
import { Todo } from "@prisma/client";

// demora intencional
const sleep = (seconds: number = 0 ):Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

/// toggle complete del todo
export const updateTodo = async (id: string, completed: boolean):Promise<Todo> => {
  // await sleep(2)
  const body = {completed}

  const response = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
  return response
}


/// toggle complete del todo
export const createTodo = async (description: string):Promise<Todo> => {
  const body = {description}

  const response = await fetch(`/api/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...body})
  }).then(res => res.json())
  return response
}

export const deleteCompleted = async ():Promise<boolean> => {
  const response = await fetch(`/api/todos`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  return response
}