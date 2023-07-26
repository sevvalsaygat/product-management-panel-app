import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const ProductsProvider = dynamic(
  () => {
    return import('@hooks/useProducts').then((mod) => mod.ProductsProvider);
  },
  { ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  );
}
