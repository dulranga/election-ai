import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/Navbar";
import { ConfigProvider as AntConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AntConfigProvider theme={theme}>
          <Navbar />
          <div>
            <AntdRegistry>{children}</AntdRegistry>
          </div>
          <Footer />
        </AntConfigProvider>
      </body>
    </html>
  );
}
