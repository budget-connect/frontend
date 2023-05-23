import { Expense } from '@/contexts/BudgetContext';

function generatePrompt(
  monthlyIncome: number,
  categoryName: string,
  location: string,
  totalBudget: number,
  expenses: Expense[]
) {
  return `monthly income is ${monthlyIncome}, location is ${location}, category is ${categoryName}, total budget is ${totalBudget}${
    expenses.length > 0
      ? ', ' +
        expenses
          .map((expense) => expense.description + ' is ' + expense.amount)
          .join(', ')
      : ''
  }`;
}

export default generatePrompt;
