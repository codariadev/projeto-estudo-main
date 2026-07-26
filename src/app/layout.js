import "./globals.css";

export const metadata = {
  title: "SincroAlign CRM",
  description: "CRM Inteligente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
