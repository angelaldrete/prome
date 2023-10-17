import type { Metadata } from "next";
import "./styles/main.css";

export const metadata: Metadata = {
  title: "Prome | Angel Aldrete Martinez",
  description:
    "I'm a Software Developer based in Mexico. I'm passionate about building software that helps people and communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
