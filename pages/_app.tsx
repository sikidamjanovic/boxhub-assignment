import { Header } from 'components/Header';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { TableContextProvider } from 'contexts/TableContext';

const inter = Inter({ subsets: ['latin'] });

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return(
    <TableContextProvider>
      <main className={`${inter.className} flex justify-center w-screen bg-neutral-950`}>
        <title>BoxHub - Orders Assignment</title>
        <div className="flex flex-col gap-5 p-10 w-screen h-screen max-w-screen-xl flex-1">
          <Header/>
          <div className="overflow-x-auto flex flex-col items-center w-full h-full shadow-md">
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </TableContextProvider>
  )
}

export default MyApp
