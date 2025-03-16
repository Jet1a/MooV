import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "@/app/styles/globals.scss";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MooV",
  description: "Movie database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.style}`}>{children}</body>
    </html>
  );
}
