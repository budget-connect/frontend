import {
  UNCATEGORIZED_BUDGET,
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from '@/contexts/BudgetContext';
import BudgetCard, { BudgetCardProps } from './BudgetCard';
import { Button } from 'flowbite-react';
import { currencyFormatter } from './utils';

interface BudgetExpenseCardProps {
  budgetId: string;
}

export const BudgetExpenseCard: React.FC<
  BudgetExpenseCardProps & BudgetCardProps
> = ({ budgetId, ...props }) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? UNCATEGORIZED_BUDGET
      : budgets.find((b) => b.id === budgetId);

  return (
    <BudgetCard
      {...props}
      expenses={
        <div className="flex flex-col gap-4">
          {expenses.map((expense) => (
            <>
              <div
                className="flex flex-row gap-2 items-center border-dashed border-b pb-2"
                key={expense.id}
              >
                <div className="me-auto text-lg font-semibold">
                  {expense.description ?? 'No description'}
                </div>
                <div className="text-xl">
                  {currencyFormatter.format(expense.amount)}
                </div>
                <Button
                  onClick={() => deleteExpense(expense)}
                  size="sm"
                  color="failure"
                  outline
                >
                  &times;
                </Button>
              </div>
            </>
          ))}
        </div>
      }
      deleteButton={
        <div className="">
          {budgetId !== UNCATEGORIZED_BUDGET_ID && (
            <Button
              onClick={() => {
                if (budget) {
                  deleteBudget(budget);
                }
              }}
              color="failure"
              outline
            >
              Delete
            </Button>
          )}
        </div>
      }
    />
  );
};
