import './styles/globals.css'
import { NavBar } from './_components/NavBar';
import { Footer } from './_components/Footer';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Imperial Futsal</title>
        <meta name="description" content="Site oficial do Imperial Futsal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/logo_time.ico" />
      </Head>
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