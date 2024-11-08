import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import { CartProvider } from "./providers/cart-provider";
import { ThemeProvider } from "./providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Desserts",
  description: "Order delicious desserts online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={redHatText.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>{children}</CartProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}