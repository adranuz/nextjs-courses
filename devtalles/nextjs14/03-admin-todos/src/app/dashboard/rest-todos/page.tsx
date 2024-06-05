// solo en paginas, layout o route handlers
export const dynamic = 'force-dynamic'; // para que sea dinámica
export const revalidate = 0; // para que siempre sea validada

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";
import { redirect } from "next/navigation";

export const metadata = {
 title: 'Listado de todos',
 description: 'Listado de todos',
};

export default async function Home() {
	const session = await auth();
	if(!session?.user) redirect('/dashboard');
  const todos = (!session?.user) ? [] : await prisma.todo.findMany({
		orderBy: { id: 'desc' },
		where: {
			userId: session.user.id
		}
	});
	return (
		<div>
			<div className="w-full px-3 mx-5 mb-5">
			<NewTodo />
			</div>
			<TodosGrid todos={todos} />
		</div>
	);
}
