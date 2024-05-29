import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

export async function GET(request: Request) { 
  const { searchParams } = new URL(request.url)

  // Check if the take parameter is a number
  const take = searchParams.get('take') ?? '10'
  if(isNaN(+take)) return NextResponse
    .json({message: 'Invalid take parameter'}, {status: 400})

  // Check if the skip parameter is a number
  const skip = searchParams.get('skip') ?? '0'
  if(isNaN(+skip)) return NextResponse
    .json({message: 'Invalid skip parameter'}, {status: 400})

  const todos = await prisma.todo.findMany({
    take: parseInt(take),
    skip: parseInt(skip),
  })
  return NextResponse.json({
    todos
  })
}

const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false)
})

export async function POST(request: Request) {
  try {
    const body = await postSchema.validate(await request.json())
    const todo = await prisma.todo.create({
      data: {
        description: body.description,
        completed: body.completed
      }
    })
    return NextResponse.json(todo)
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }
    return NextResponse.json({ message: error }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  const completedTodos = await prisma.todo.findMany({
    where: { completed: true }
  })
  if(completedTodos.length === 0) return NextResponse.json({message: 'No completed todos'})
  
  await prisma.todo.deleteMany({
    where: { completed: true }
  })
  return NextResponse.json({completedTodos})
}