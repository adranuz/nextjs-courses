import { auth } from "@/auth.config"
import { Title } from '../../../components/ui/title/Title';
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth()
  if(!session?.user) {
    redirect("/")
  }
  return (
    <div>
      <Title title="Perfil"/>
      <p>
      {JSON.stringify(session?.user, null, 2)}
      </p>
      <h3 className="text-lg">{session.user.email}</h3>
      <h3 className="text-lg">{session.user.name}</h3>
      <h3 className="text-lg">{session.user.image}</h3>
      <h3 className="text-lg">{session.user.email}</h3>
    </div>
  )
}