import '../styles/globals.css';
import Header from './components/Header';
import Providers from './components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className='bg-gray-200 dark:bg-zinc-900 transition-all duration-700'>
        <Providers>
          <Header />
          <div className='max-w-6xl mx-auto'>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
