import { auth } from '@/auth';
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

interface Args {
  params: {
    id: string
  }
}
interface Todo {
	id: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const getTodo = async (id: string): Promise<Todo | null> => {
	const session = await auth()
	if(!session?.user?.id)
		throw NextResponse.json({message: 'User not found'}, {status: 400})
	
	
	const todo = await prisma.todo.findUnique({
		where: {
			id,
			userId: session.user.id
		},
	});
	return todo
}

export async function GET(request: Request, { params: { id} }: Args) {
	const todo = await getTodo(id);
  if(!todo) return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
	
	return NextResponse.json({ todo });
}

const putSchema = yup.object({
	description: yup.string().optional(),
	completed: yup.boolean().optional(),
});


export async function PUT(request: Request, { params: {id} }: Args) {
	try {
		const todo = await getTodo(id);
		if (!todo) return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
		const {completed, description} = await putSchema.validate(await request.json())
		const updatedTodo = await prisma.todo.update({
			where: { id },
			data: { completed, description},
		})
		return NextResponse.json({ updatedTodo });
	} catch (error) {
		if(error instanceof yup.ValidationError) {
			return NextResponse.json({ message: error.message }, { status: 400 });
		}
		return NextResponse.json({ message: error }, { status: 400 });
	}
}



