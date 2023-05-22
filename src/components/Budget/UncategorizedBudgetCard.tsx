import React from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '@/contexts/BudgetContext';
import BudgetCard, { BudgetCardProps } from './BudgetCard';

interface UncategorizedBudgetCardProps
  extends Omit<BudgetCardProps, 'amount' | 'name' | 'gray'> {}

const UncategorizedBudgetCard: React.FC<UncategorizedBudgetCardProps> = (
  props
) => {
  const { getBudgetExpenses } = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if (amount === 0) return null;

  return <BudgetCard {...props} amount={amount} name="Uncategorized" gray />;
};

export default UncategorizedBudgetCard;
