import { ReactNode } from 'react';
import Header from './Header';
import Head from 'next/head';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Budget Connect</title>
      </Head>
      <Header />
      <main className="mx-auto min-h-screen flex-col items-center justify-between px-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
