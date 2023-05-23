import {
  Budget,
  Expense,
  UNCATEGORIZED_BUDGET,
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from '@/contexts/BudgetContext';
import BudgetCard, { BudgetCardProps } from './BudgetCard';
import { Button } from 'flowbite-react';
import { currencyFormatter } from './utils';
import { useState } from 'react';
import AskAiModal from './AskAiModal';

interface BudgetExpenseCardProps {
  budgetId: string;
}

export const BudgetExpenseCard: React.FC<
  BudgetExpenseCardProps & BudgetCardProps
> = ({ budgetId, ...props }) => {
  const [showAskAiModal, setShowAskAiModal] = useState(false);
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? UNCATEGORIZED_BUDGET
      : budgets.find((b) => b.id === budgetId);

  return (
    <>
      <BudgetCard
        {...props}
        expenses={
          <div className="flex flex-col gap-4">
            {expenses.map((expense) => (
              <div
                className="flex flex-row items-center gap-2 border-b border-dashed pb-2"
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
            ))}
          </div>
        }
        deleteButton={
          <div>
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
        askAiButton={
          <Button
            gradientDuoTone={'purpleToBlue'}
            onClick={() => setShowAskAiModal(true)}
          >
            Ask BudgetConnect AI ✨
          </Button>
        }
      />
      <AskAiModal
        show={showAskAiModal}
        prompt={budget !== undefined ? generatePrompt(budget, expenses) : ''}
        handleClose={() => setShowAskAiModal(false)}
      />
    </>
  );
};

function generatePrompt(budget: Budget, expenses: Expense[]) {
  return (
    'monthly income is 3000, location is singapore, category is food, total budget is ' +
    budget.max +
    (expenses.length > 0
      ? ', ' +
        expenses
          .map((expense) => expense.description + ' is ' + expense.amount)
          .join(', ')
      : '')
  );
}
