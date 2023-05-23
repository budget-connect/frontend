import AddBudgetModal from '@/components/Budget/AddBudgetModal';
import AddExpenseModal from '@/components/Budget/AddExpenseModal';
import { BudgetExpenseCard } from '@/components/Budget/BudgetExpenseCard';
import SetIncomeModal from '@/components/Budget/SetIncomeModal';
import TotalBudgetCard from '@/components/Budget/TotalBudgetCard';
import TotalIncomeCard from '@/components/Budget/TotalIncomeCard';
import UncategorizedBudgetCard from '@/components/Budget/UncategorizedBudgetCard';
import ViewExpensesModal from '@/components/Budget/ViewExpensesModal';
import Layout from '@/components/Layout/Layout';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '@/contexts/BudgetContext';
import { Button } from 'flowbite-react';
import { useState } from 'react';

const Portfolio = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showSetIncomeModal, setShowSetIncomeModal] = useState(false);
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
        <div className="container mx-auto my-4 mt-16 max-w-4xl">
          <div className="mb-4 flex justify-end space-x-2">
            <Button onClick={() => setShowSetIncomeModal(true)}>
              Set Income
            </Button>
            <Button onClick={() => setShowAddBudgetModal(true)}>
              Add Budget
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex space-x-2">
              <TotalBudgetCard />
              <TotalIncomeCard />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {budgets.map((budget) => {
                const amount = getBudgetExpenses(budget.id).reduce(
                  (total, expense) => total + expense.amount,
                  0
                );
                return (
                  <BudgetExpenseCard
                    budgetId={budget.id}
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
      <SetIncomeModal
        show={showSetIncomeModal}
        handleClose={() => setShowSetIncomeModal(false)}
      />
      {addExpenseModalBudgetId !== undefined && (
        <AddExpenseModal
          show={showAddExpenseModal}
          defaultBudgetId={addExpenseModalBudgetId}
          handleClose={() => setShowAddExpenseModal(false)}
        />
      )}
      {viewExpensesModalBudgetId !== null && (
        <ViewExpensesModal
          budgetId={viewExpensesModalBudgetId}
          handleClose={() => setViewExpensesModalBudgetId(null)}
        />
      )}
    </>
  );
};

export default Portfolio;
