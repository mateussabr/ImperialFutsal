import './styles/globals.css'
import { NavBar } from './_components/NavBar';
import { Footer } from './_components/Footer';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Imperial Futsal</title>
        <meta name="description" content="Site oficial do Imperial Futsal" />
        <link rel="icon" href="/logo_time.ico" />
      </head>
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
