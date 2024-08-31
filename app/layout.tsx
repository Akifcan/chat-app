import type { Metadata } from "next";
import "./styles/globals.css";
import ReduxProvider from "@/store/redux.provider";

export const metadata: Metadata = {
  title: "Chat App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <div id="portal" />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
