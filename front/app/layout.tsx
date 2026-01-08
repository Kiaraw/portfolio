import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio de  Kiara Wurtz",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
