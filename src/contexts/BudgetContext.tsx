import useLocalStorage from '@/hooks/useLocalStorage';
import React, { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';

export interface Expense {
  id: string;
  description: string;
  amount: number;
  budgetId: string;
}

export interface Budget {
  id: string;
  name: string;
  max: number;
}

interface BudgetsContextType {
  budgets: Budget[];
  expenses: Expense[];
  getBudgetExpenses: (budgetId: string) => Expense[];
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  addBudget: (budget: Omit<Budget, 'id'>) => void;
  deleteBudget: (budget: Pick<Budget, 'id'>) => void;
  deleteExpense: (expense: Pick<Expense, 'id'>) => void;
}

const BudgetsContext = React.createContext<BudgetsContextType | undefined>(
  undefined
);

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized';
export const UNCATEGORIZED_BUDGET: Budget = {
  id: UNCATEGORIZED_BUDGET_ID,
  max: 0,
  name: 'Uncategorized',
};

export function useBudgets() {
  const context = useContext(BudgetsContext);
  if (!context) {
    throw new Error('useBudgets must be used within a BudgetsProvider');
  }
  return context;
}

export const BudgetsProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [budgets, setBudgets] = useLocalStorage<Budget[]>('budgets', []);
  const [expenses, setExpenses] = useLocalStorage<Expense[]>('expenses', []);

  function getBudgetExpenses(budgetId: string): Expense[] {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  function addExpense({ description, amount, budgetId }: Omit<Expense, 'id'>) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: uuidV4(), description, amount, budgetId },
    ]);
  }

  function addBudget({ name, max }: Omit<Budget, 'id'>) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  }

  function deleteBudget({ id }: Pick<Budget, 'id'>) {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => {
        if (expense.budgetId !== id) return expense;
        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
      })
    );

    setBudgets((prevBudgets) =>
      prevBudgets.filter((budget) => budget.id !== id)
    );
  }

  function deleteExpense({ id }: Pick<Expense, 'id'>) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  const contextValue: BudgetsContextType = {
    budgets,
    expenses,
    getBudgetExpenses,
    addExpense,
    addBudget,
    deleteBudget,
    deleteExpense,
  };

  return (
    <BudgetsContext.Provider value={contextValue}>
      {children}
    </BudgetsContext.Provider>
  );
};
