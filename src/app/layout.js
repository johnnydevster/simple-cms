import MantineProvider from "@/components/providers/MantineProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import Toaster from "@/components/providers/ToastProvider";
import "./globals.css";

export const metadata = {
  title: "Super simple CMS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-700 bg-gray-50">
        <header></header>
        <Toaster toastOptions={{ duration: 5000 }} />
        <MantineProvider>
          <QueryProvider>{children}</QueryProvider>
        </MantineProvider>
        <footer></footer>
      </body>
    </html>
  );
}
