import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaBlogs",
  description: "Insta updates from around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const logged = true;

  if (!logged) {
    return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    )
  }

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} style={{ minHeight: '100vh', display: 'flex', justifyContent: 'space-between' , flexDirection:'column' }}>
        <div className="w-full" >
          <Header />
          <div className=" mt-[70px] max-w-screen-xl mx-auto ">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
