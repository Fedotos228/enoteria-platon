import { useRouter } from "next/router";
import { Onest } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

const onest = Onest({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${onest.className} overflow-x-hidden`}>
        <div className="toaster">
            <Toaster richColors position="top-center" theme="light" />
        </div>
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {children}
            </main>
        </div>
      </body>
    </html>
  );
}
