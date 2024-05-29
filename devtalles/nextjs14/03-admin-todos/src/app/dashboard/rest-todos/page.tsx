// solo en paginas, layout o route handlers
export const dynamic = 'force-dynamic'; // para que sea dinámica
export const revalidate = 0; // para que siempre sea validada

import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
 title: 'Listado de todos',
 description: 'Listado de todos',
};

export default async function Home() {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' }});
	return (
		<div>
			<div className="w-full px-3 mx-5 mb-5">
			<NewTodo />
			</div>
			<TodosGrid todos={todos} />
		</div>
	);
}
