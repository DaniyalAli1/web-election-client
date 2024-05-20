import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ConnectWallet from "@/components/ConnectWallet";
import { ThirdwebProvider } from "@/providers/ThirdWebProviders";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Election Dapp",
  description: "Election App created by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
        <ConnectWallet/>
        <Sidebar/>
        {children}
        </ThirdwebProvider>
        </body>
    </html>
  );
}
