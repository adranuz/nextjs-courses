import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/shared/Header";
import { Footer } from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["100", "300", "400", "500"], subsets: ["latin"] });


/**
 * metadata es un objeto que contiene la informacion pare el SEO de la pagina
 */
export const metadata: Metadata = {
  title: "Future World",
  description: "Future World Store",
};

/**
 * RootLayout es el componente padre de la aplicacion
 * que se encarga de renderizar el layout
 * * Recuerda que el layout abraza el contenido de las paginas subsecuentes
 * * dentro de la carpeta
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
