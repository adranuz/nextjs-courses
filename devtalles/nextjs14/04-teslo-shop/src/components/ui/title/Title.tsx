import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
export const Title = ({title, subtitle, className}: Props) => {
  return (
    <div className={className}>
      <h1 className={"antialiased text-4xl font-semibold my-10 " + titleFont.className}>{title}</h1>
      {subtitle && <h3 className="text-xl mb-5">{subtitle}</h3>}
    </div>
  )
}
