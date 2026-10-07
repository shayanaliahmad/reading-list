import "./globals.css";

export const metadata = {
  title: "Reading List",
  description: "A small reading list built with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
