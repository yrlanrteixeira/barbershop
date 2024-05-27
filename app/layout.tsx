import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_components/footer";
import { Toaster } from "./_components/ui/sonner";
import AuthProvider from "./_providers/auth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barbershop",
  description:
    "Barbershop is a platform to help you find the best barbershops in town.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} dark`}>
        <AuthProvider>
          <div className="flex-1">{children}</div>

          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
