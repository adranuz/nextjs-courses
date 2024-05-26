import Image from "next/image";
import { Description } from "./components/home/Description/Description";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Description />
    </main>
  );
}
