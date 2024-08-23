import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yasas Banuka",
  description: "Welcome to my personal portfolio! I'm Yasas Banuka Gunasena, and this space is a showcase of my work, skills, and experiences. Built with Next.js, this portfolio reflects my passion for creating efficient and dynamic web applications. Feel free to explore and learn more about my journey in tech!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
