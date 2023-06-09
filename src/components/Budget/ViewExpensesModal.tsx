import {
  UNCATEGORIZED_BUDGET,
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from '@/contexts/BudgetContext';
import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { currencyFormatter } from './utils';

interface ViewExpensesModalProps {
  budgetId: string;
  handleClose: () => void;
}

const ViewExpensesModal: React.FC<ViewExpensesModalProps> = ({
  budgetId,
  handleClose,
}) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? UNCATEGORIZED_BUDGET
      : budgets.find((b) => b.id === budgetId);

  return (
    <Modal show={budgetId != null} onClose={handleClose}>
      <Modal.Header>
        <div className="flex flex-row gap-2">
          <div>Expenses - {budget?.name}</div>
        </div>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <div className="flex w-full justify-end">
          {budgetId !== UNCATEGORIZED_BUDGET_ID && (
            <Button
              onClick={() => {
                if (budget) {
                  deleteBudget(budget);
                }
                handleClose();
              }}
              color="failure"
              outline
            >
              Delete
            </Button>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewExpensesModal;
