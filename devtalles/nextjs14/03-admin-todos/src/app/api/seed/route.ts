import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 
  await prisma.todo.deleteMany()

  const todo = await prisma.todo.createMany({
		data: [
			{
				description: "Learn Prisma for database",
				completed: true,
			},
      { description: "Learn Next.js for frontend", completed: true },
      { description: "Learn Vercel for deployment", completed: true
      },
      { description: "Learn TypeScript for type safety", completed: true}
		],
	});


  return NextResponse.json({
    message: 'Hello from seed route'
  })
}