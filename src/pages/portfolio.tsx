import CategoryItemList from '@/components/Category/CategoryItemList';
import Layout from '@/components/Layout/Layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Portfolio() {
  return (
    <Layout>
      <div className="my-12 flex">
        <CategoryItemList />
      </div>
    </Layout>
  );
}
