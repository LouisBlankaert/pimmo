import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Poppins est une police similaire à SF Pro d'Apple
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pimmo | Achat et location entre particuliers',
  description:
    'Trouvez votre prochain logement directement entre particuliers. Achat, vente et location de maisons et appartements sans intermédiaire.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
