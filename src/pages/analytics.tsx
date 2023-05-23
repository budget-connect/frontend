'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import Layout from '@/components/Layout/Layout';
import AggregatedData from '@/components/Budget/AggregatedData';

const data = [
  {
    Month: 'May 2023',
    HighSavings: 890,
    Savings: 890,
    NoSavings: 890,
  },
  {
    Month: 'May 2024',
    HighSavings: 1120,
    Savings: 900,
    NoSavings: 890,
  },
  {
    Month: 'May 2025',
    HighSavings: 1930,
    Savings: 1000,
    NoSavings: 890,
  },
  {
    Month: 'May 2026',
    HighSavings: 2000,
    Savings: 1220,
    NoSavings: 890,
  },
  {
    Month: 'May 2027',
    HighSavings: 2500,
    Savings: 1430,
    NoSavings: 890,
  },
  {
    Month: 'May 2028',
    HighSavings: 3100,
    Savings: 1890,
    NoSavings: 890,
  },
  {
    Month: 'May 2029',
    HighSavings: 3200,
    Savings: 2090,
    NoSavings: 890,
  },
  {
    Month: 'May 2030',
    HighSavings: 3600,
    Savings: 2200,
    NoSavings: 890,
  },
  {
    Month: 'May 2031',
    HighSavings: 4000,
    Savings: 2500,
    NoSavings: 890,
  },
  {
    Month: 'May 2032',
    HighSavings: 4300,
    Savings: 2900,
    NoSavings: 890,
  },
  {
    Month: 'May 2033',
    HighSavings: 5500,
    Savings: 3890,
    NoSavings: 890,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export default function Analytics() {
  return (
    <Layout>
      <AggregatedData />
      <div className="container mx-auto">
        <div className="relative flex place-items-center pt-4 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Card className="mt-8">
            <Title>10 Years Projection</Title>
            <Text>Comparison between High Savings, Savings and No Savings</Text>
            <AreaChart
              className="mt-4 h-80"
              data={data}
              categories={['HighSavings', 'Savings', 'NoSavings']}
              index="Month"
              colors={['indigo', 'fuchsia', 'gray']}
              valueFormatter={valueFormatter}
            />
          </Card>
        </div>
      </div>
    </Layout>
  );
}
