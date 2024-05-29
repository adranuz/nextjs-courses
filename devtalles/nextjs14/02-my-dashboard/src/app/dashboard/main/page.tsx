import { SimpleWidget, WidgetsGrid } from "@/components";

export default function Page() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>

      <WidgetsGrid/>
    </div>
  )
}