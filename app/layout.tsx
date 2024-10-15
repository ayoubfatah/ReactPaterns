import "./globals.css";

export const metadata = {
  title: "react paterns ",
  description: " learning react paters and design paterns",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
