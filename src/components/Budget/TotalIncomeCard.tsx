import { useBudgets } from '@/contexts/BudgetContext';
import BudgetCard from './BudgetCard';

export default function TotalIncomeCard() {
  const { expenses, income } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <BudgetCard amount={amount} name="Total Income" max={income} hideButtons />
  );
}
