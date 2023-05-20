import { CategoryItem } from '@/components/Category/CategoryItem';
import CategoryItemList from '@/components/Category/CategoryItemList';
import Layout from '@/components/Layout/Layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Portfolio() {
  return (
    <Layout>
      <div className="div">
        <CategoryItemList />
      </div>
    </Layout>
  );
}
