import { auth } from '@/auth'
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'


// funcion para listar todos
export async function GET(request: Request) {
  const session = await auth()
  if(!session?.user?.id)
    return NextResponse.json({message: 'User not found'}, {status: 400})
  
  
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
    where: { userId: session.user.id },
  })
  return NextResponse.json({
    todos
  })
}

const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false)
})

// funcion para crear un solo todo
export async function POST(request: Request) {
  try {
    const session = await auth()
    if(!session?.user?.id)
      return NextResponse.json({message: 'User not found'}, {status: 400})
    
    
    const body = await postSchema.validate(await request.json())
    
    
    const todo = await prisma.todo.create({
      data: {
        description: body.description,
        completed: body.completed,
        userId: session.user.id
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


// funcion para eliminar todos los todos completados
export async function DELETE(request: Request) {
  const session = await auth()
  if(!session?.user?.id)
    return NextResponse.json({message: 'User not found'}, {status: 400})
  
  const completedTodos = await prisma.todo.findMany({
    where: { completed: true, userId: session.user.id }
  })
  if(completedTodos.length === 0) return NextResponse.json({message: 'No completed todos'})
  
  await prisma.todo.deleteMany({
    where: { completed: true, userId: session.user.id }
  })
  return NextResponse.json({completedTodos})
}