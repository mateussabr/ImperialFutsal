import './styles/globals.css'
import { NavBar } from './_components/NavBar';
import { Footer } from './_components/Footer';

export const metadata = {
  title: 'Imperial Futsal',
  description: 'Site oficial do Imperial Futsal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
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
