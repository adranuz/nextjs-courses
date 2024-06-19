import { Badge } from "@/components/ui/badge";

export default function DashboardHomePage() {
  return (
    <div className="flex gap-3">
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="default">default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="info">info</Badge>
      <Badge capitalize>capitalize</Badge>
    </div>
  )
}