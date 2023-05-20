'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import Layout from '@/components/Layout/Layout';

const data = [
  {
    Month: 'Jan 21',
    Sales: 2890,
    Profit: 2400
  },
  {
    Month: 'Feb 21',
    Sales: 1890,
    Profit: 1398
  },
  {
    Month: 'Jan 22',
    Sales: 3890,
    Profit: 2980
  }
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export default function Analytics() {
  return (
    <Layout>
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] pt-10">
      <Card className="mt-8">
        <Title>Performance</Title>
        <Text>Comparison between Sales and Profit</Text>
        <AreaChart
          className="mt-4 h-80"
          data={data}
          categories={['Sales', 'Profit']}
          index="Month"
          colors={['indigo', 'fuchsia']}
          valueFormatter={valueFormatter}
        />
      </Card>
    </div>
  </Layout>
  );
}
