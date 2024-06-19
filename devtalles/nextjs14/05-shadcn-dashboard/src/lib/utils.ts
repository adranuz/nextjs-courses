import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


// helper que utiliza shadcn para mesclar clases de tailwindcss
// y utilidades de componentes de shadcn
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
