import "./globals.css";

export const metadata = {
  title: "Startup Ideas Community",
  description: "A community for people who create startup ideas"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
