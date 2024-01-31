import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobify",
  description: "find your dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <main className="flex flex-col min-h-screen bg-secondary">
        <Navbar />
         <section className="flex-grow">
          <Container>
            {children}
          </Container>
         </section>
        </main>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
