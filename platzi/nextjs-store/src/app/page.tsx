
import { Description } from "./components/home/Description";
import { Hero } from "./components/home/Hero";
import { MainProduct } from "./components/home/MainProducts";

export default function Home() {
  /**
   * React Server Component, son los componentes simples de toda la vida de react,
   * pero en nextjs son componentes solo presentacionales
   *
   * React Client Component, son los componentes totalmente dinamicos, elementos que van cambiando
   * tambien pueden ser los que necesitan una api del navegador
   * para declarar RCC necesitamos poner "use client"
   * Usalos cuando muestre info de API, sea dinamico, maneje estados, etc
   * Recuerda que los hijos de un RCC son RCC por herencia.
   * Recuerda usarlos con precaucion, ya que pueden afectar el rendimiento de la pagina, por lo que
   * es recomendable usarlos solo en el componente mas pequeño posible
   */
  // console.log("Hola mundo")


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Description />
      <MainProduct />

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>Hola mundo</p>
      </div>
    </main>
  );
}
