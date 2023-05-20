import { Card, Title, Text } from '@tremor/react';
import Search from '../components/Layout/Search';
import TemplatesTable from '../components/Layout/Table';
import Layout from '@/components/Layout/Layout';

export const dynamic = 'force-dynamic';

export default function Templates() {
  const templates = [
    {
      id: '1',
      name: 'Super Savings Goal',
      usecase: 'string',
      price: 'free',
    },
    {
      id: '2',
      name: 'Wedding Savings Goal',
      usecase: 'string',
      price: 'free',
    },
    {
      id: '3',
      name: 'Retired Savings Goal',
      usecase: 'string',
      price: 'premium',
    }
  ]

  return (
    <Layout>
      <div className="relative place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] pt-10">
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>Template Store</Title>
        <Text>
          A list of templates can be used for budgeting.
        </Text>
        <Search />
        <Card className="mt-6">
          {/* @ts-expect-error Server Component */}
          <TemplatesTable templates={templates} />
        </Card>
      </main>
      </div>
    </Layout>
    
  );
}
