import { Card, Metric, Text, Flex, Grid, Title, BarList } from '@tremor/react';
import Layout from '@/components/Layout/Layout';

const income = [
  { name: 'salary', value: 1230 },
  { name: 'interest', value: 751 },
  { name: 'dividend', value: 471 },
  { name: 'rental', value: 280 },
  { name: 'side hustle', value: 78 },
];

const expenses = [
  { name: 'food', value: 453 },
  { name: 'gas', value: 351 },
  { name: 'groceries', value: 271 },
  { name: 'education', value: 191 },
];

const budget = [
  { name: 'HDB', value: 789 },
  { name: 'family', value: 676 },
  { name: 'car', value: 564 },
  { name: 'education', value: 234 },
  { name: 'hobby', value: 191 },
];

const data = [
  {
    category: 'Income',
    stat: '10,234',
    data: income,
  },
  {
    category: 'Expense',
    stat: '12,543',
    data: expenses,
  },
  {
    category: 'Budget',
    stat: '2,543',
    data: budget,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

const categories: {
  title: string;
  metric: string;
  metricPrev: string;
}[] = [
  {
    title: 'Income',
    metric: '$ 12,699',
    metricPrev: '$ 9,456',
  },
  {
    title: 'Expense',
    metric: '$ 40,598',
    metricPrev: '$ 45,564',
  },
  {
    title: 'Budget',
    metric: '1,072',
    metricPrev: '856',
  },
];

export default function AggregatedData() {
  return (
    <div className="container mx-auto">
      <div className="relative flex place-items-center pt-10 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className="mx-auto w-full">
          <Grid className="gap-6" numColsSm={2} numColsLg={3}>
            {categories.map((item) => (
              <Card key={item.title}>
                <Flex alignItems="start">
                  <Text>{item.title}</Text>
                </Flex>
                <Flex
                  className="space-x-3 truncate"
                  justifyContent="start"
                  alignItems="baseline"
                >
                  <Metric>{item.metric}</Metric>
                  <Text className="truncate">from {item.metricPrev}</Text>
                </Flex>
              </Card>
            ))}
          </Grid>
          <Grid className="mt-8 gap-6" numColsSm={2} numColsLg={3}>
            {data.map((item) => (
              <Card key={item.category}>
                <Title>{item.category}</Title>
                <Flex
                  className="space-x-2"
                  justifyContent="start"
                  alignItems="baseline"
                >
                  <Metric>{item.stat}</Metric>
                  <Text>Total</Text>
                </Flex>
                <Flex className="mt-6">
                  <Text>Breakdown</Text>
                  <Text className="text-right">SGD</Text>
                </Flex>
                <BarList
                  className="mt-2"
                  data={item.data}
                  valueFormatter={dataFormatter}
                />
              </Card>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
