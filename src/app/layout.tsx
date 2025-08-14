import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Devon Valencia's Resume",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
