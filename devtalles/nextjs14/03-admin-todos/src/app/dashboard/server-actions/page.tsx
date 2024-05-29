
// solo en paginas, layout o route handlers
export const dynamic = 'force-dynamic'; // para que sea dinámica
export const revalidate = 0; // para que siempre sea validada


import prisma from "@/lib/prisma";
import { NewTodoActions } from "@/todos/components/NewTodoActions";
import { TodosGridActions } from "@/todos/components/TodosGridActions";

export const metadata = {
 title: 'Listado de todos con server Actions',
 description: 'Listado de todos con server Actions',
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' }});
	return (
		<div>
			<h1 className="text-2xl font-bold">Server Todos Page</h1>
			<div className="w-full px-3 mx-5 mb-5">
				<NewTodoActions />
			</div>
			<TodosGridActions todos={todos} />
		</div>
	);
}
