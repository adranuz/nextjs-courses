import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
  }

export default function CategoryPage({params}: Props) {
  const { id } = params;
  if(id === "kids") notFound()
  return (
    <section className="">
      <h1 className="">CategoryPage</h1>
      <h1 className="">CategoryPage</h1>
      <h1 className="">CategoryPage</h1>
      <h1 className="">CategoryPage</h1>
      <h1 className="">CategoryPage</h1>
      <h1 className="">CategoryPage</h1>
    </section>
  );
}