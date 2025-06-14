import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Treinos",
  description: "Lista de exercícios",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
