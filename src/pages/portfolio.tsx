import AddBudgetModal from '@/components/Budget/AddBudgetModal';
import AddExpenseModal from '@/components/Budget/AddExpenseModal';
import { BudgetCard } from '@/components/Budget/BudgetCard';
import TotalBudgetCard from '@/components/Budget/TotalBudgetCard';
import UncategorizedBudgetCard from '@/components/Budget/UncategorizedBudgetCard';
import ViewExpensesModal from '@/components/Budget/ViewExpensesModal';
import Layout from '@/components/Layout/Layout';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '@/contexts/BudgetContext';
import { Button } from 'flowbite-react';
import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState<
    string | null
  >(null);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState<
    string | undefined
  >();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId: string | undefined) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <Layout>
        <div className="my-4">
          <div className="mb-4 gap-2 flex flex-row justify-center mx-4">
            <Button
              onClick={() => setShowAddBudgetModal(true)}
              className="flex w-full"
            >
              Add Budget
            </Button>
            <Button
              outline
              onClick={() => openAddExpenseModal(undefined)}
              className="flex w-full"
            >
              Add Expense
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <TotalBudgetCard />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {budgets.map((budget) => {
                const amount = getBudgetExpenses(budget.id).reduce(
                  (total, expense) => total + expense.amount,
                  0
                );
                return (
                  <BudgetCard
                    key={budget.id}
                    name={budget.name}
                    amount={amount}
                    max={budget.max}
                    onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                    onViewExpensesClick={() =>
                      setViewExpensesModalBudgetId(budget.id)
                    }
                  />
                );
              })}
              <UncategorizedBudgetCard
                onAddExpenseClick={() => openAddExpenseModal(undefined)}
                onViewExpensesClick={() =>
                  setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
                }
              />
            </div>
          </div>
        </div>
      </Layout>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId(null)}
      />
    </>
  );
};

export default Portfolio;
