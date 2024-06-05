import { auth } from "@/auth";
import { WidgetItem } from "@/components/WidgetItem";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await auth();
	// console.log(session);
	if(!session) {
		redirect('/api/auth/signin')
	};
  return (
		<div className="grid gap-6 grid-cols-1 ">
			<WidgetItem title="Usario Conectado Server Side">
				<div className="flex flex-col">
					<h2>Users</h2>
					<p>{session.user?.name}</p>
					<p>{session.user?.image}</p>
					<p>{session.user?.email}</p>

					<div>{JSON.stringify(session)}</div>
				</div>
			</WidgetItem>
		</div>
	);
}
