import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if(!session?.user) {
    redirect("/auth/login?redirectTo=/checkout/address")
  }
	return (
		<div>
			<h1>{children}</h1>
		</div>
	);
}