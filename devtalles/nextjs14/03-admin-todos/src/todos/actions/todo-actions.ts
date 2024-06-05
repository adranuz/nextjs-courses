'use server'

import { auth } from "@/auth";
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

const getUserIdFromSession = async () => {
  const session = await auth();
    if(!session?.user?.id) throw new Error('User not found')
  return session.user.id
}

// SERVER ACTIONS
export const toggleTodo = async (id: string, completed: boolean):Promise<Todo> => {
  // await sleep(3)
  const userId = await getUserIdFromSession()
  const todo = await prisma.todo.findFirst({
    where: { id, userId: userId },
  })
  if(!todo) throw new Error('Todo not found')

  const updatedTodo = await prisma.todo.update({
    where: { id, userId: userId },
    data: { completed }
  })
  revalidatePath('/dashboard/server-actions')
  return updatedTodo
}


/// toggle complete del todo
export const createTodo = async (description: string):Promise<Todo> => {
  try {
    const userId = await getUserIdFromSession()
    const body = {description}
    const todo = await prisma.todo.create({
      data: {
        ...body,
        userId
      }
    })
    revalidatePath('/dashboard/server-actions')
    return todo
  } catch (error) {
    return { message: 'No se creo el todo'}
  }
}

export const deleteCompleted = async ():Promise<boolean> => {
  const userId = await getUserIdFromSession()

  const response = await prisma.todo.deleteMany({
    where: { completed: true, userId }
  })
  revalidatePath('/dashboard/server-actions')
  return true
}