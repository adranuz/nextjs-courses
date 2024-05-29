'use server'

import prisma from "@/lib/prisma"
import { Todo } from '@prisma/client';
import { revalidatePath } from "next/cache";
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

// demora intencional
const sleep = (seconds: number = 0 ):Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

// SERVER ACTIONS
export const toggleTodo = async (id: string, completed: boolean):Promise<Todo> => {
  // await sleep(3)
  const todo = await prisma.todo.findFirst({
    where: { id },
  })
  if(!todo) throw new Error('Todo not found')

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed }
  })
  revalidatePath('/dashboard/server-actions')
  return updatedTodo
}


/// toggle complete del todo
export const createTodo = async (description: string):Promise<Todo> => {
  try {
    
    const body = {description}
    
    const todo = await prisma.todo.create({
      data: body
    })
    revalidatePath('/dashboard/server-actions')
    return todo
  } catch (error) {
    return { message: 'No se creo el todo'}
  }
}

export const deleteCompleted = async ():Promise<boolean> => {
  const response = await prisma.todo.deleteMany({
    where: { completed: true }
  })
  revalidatePath('/dashboard/server-actions')
  return true
}