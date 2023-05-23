import { Card, Title, Text } from '@tremor/react';
import Search from '../components/Layout/Search';
import TemplatesTable from '../components/Layout/Table';
import Layout from '@/components/Layout/Layout';

export const dynamic = 'force-dynamic';

const templates = [
  {
    id: '1',
    name: 'Student Savings Goal',
    usecase: "A financial target set by students to save money for various purposes during their academic journey. ",
    price: 'free',
  },
  {
    id: '2',
    name: 'Wedding Savings Goal',
    usecase: 'It refers to a financial target set by couples who are planning to get married. ',
    price: 'free',
  },
  {
    id: '3',
    name: 'Retired Savings Goal',
    usecase: "It refers to the financial target set by individuals or couples who are planning for their retirement. ",
    price: 'premium',
  },
];
export default function Templates() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="relative place-items-center pt-10 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <div>
            <Title>Template Store</Title>
            <Text>A list of templates can be used for budgeting.</Text>
            <Search />
            <Card className="mt-6">
              {/* @ts-expect-error Server Component */}
              <TemplatesTable templates={templates} />
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
