import React, { useState } from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '@/contexts/BudgetContext';
import BudgetCard, { BudgetCardProps } from './BudgetCard';
import { Button } from 'flowbite-react';
import AskAiModal from './AskAiModal';
import generatePrompt from '@/utils/generatePrompt';

interface UncategorizedBudgetCardProps
  extends Omit<BudgetCardProps, 'amount' | 'name' | 'gray'> {}

const UncategorizedBudgetCard: React.FC<UncategorizedBudgetCardProps> = (
  props
) => {
  const [showAskAiModal, setShowAskAiModal] = useState(false);
  const { getBudgetExpenses, income, budgets } = useBudgets();
  const expenses = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID);
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  if (amount === 0) return null;

  return (
    <>
      <BudgetCard
        {...props}
        amount={amount}
        name="Uncategorized"
        gray
        isUncatagorized
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
        prompt={generatePrompt(
          income,
          'singapore',
          'miscellaneous',
          income - budgets.reduce((total, budget) => total + budget.max, 0),
          expenses
        )}
        handleClose={() => setShowAskAiModal(false)}
      />
    </>
  );
};

export default UncategorizedBudgetCard;
