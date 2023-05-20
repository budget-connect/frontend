import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen container mx-auto flex-col items-center justify-between p-24">
        {children}
      </main>
    </div>
  );
};

export default Layout;
