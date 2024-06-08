import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <section className="h-[800px] flex justify-center items-center">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="text-cl font-semibold">Tu carrito esta vacio</h1>
        <Link href="/" className="btn-primary">Regresar</Link>
      </div>
    </section>
  );
}