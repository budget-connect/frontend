import { Button, Card, Progress } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { currencyFormatter } from './utils';

export interface BudgetCardProps {
  name: string;
  amount: number;
  max?: number;
  gray?: boolean;
  hideButtons?: boolean;
  expenses?: React.ReactNode;
  deleteButton?: React.ReactNode;
  askAiButton?: React.ReactNode;
  isUncatagorized?: boolean;
  onAddExpenseClick?: () => void;
  onViewExpensesClick?: () => void;
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  name,
  amount,
  max,
  gray,
  hideButtons,
  expenses,
  deleteButton,
  askAiButton,
  isUncatagorized,
  onAddExpenseClick,
  onViewExpensesClick,
}) => {
  return (
    <Card
      className={twMerge(
        max !== undefined && amount > max ? 'bg-red-500 bg-opacity-10' : '',
        gray ? 'bg-gray-100' : '', // last conflicting class wins
        'w-full'
      )}
    >
      <div className="flex items-center justify-between">
        <div className="mb-2 items-baseline justify-between font-normal">
          <div className="me-2 text-lg font-bold">{name}</div>
          <div className="flex items-baseline">
            {currencyFormatter.format(amount)}
            {max !== undefined && (
              <span className="ml-1 text-sm text-gray-500">
                / {currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </div>
        {askAiButton}
      </div>
      {max !== undefined && (
        <Progress
          color={getProgressBarVariant(amount, max)}
          size="lg"
          labelProgress
          progress={max !== 0 ? Number(Math.round((amount / max) * 100)) : 100}
          progressLabelPosition="inside"
        />
      )}
      {expenses}
      {!hideButtons && (
        <div className="mt-4 flex justify-end gap-x-2">
          {deleteButton}
          {!isUncatagorized && (
            <Button
              outline={true}
              gradientDuoTone="cyanToBlue"
              className=""
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
          )}
          {!deleteButton && (
            <Button onClick={onViewExpensesClick}>View Expenses</Button>
          )}
        </div>
      )}
    </Card>
  );
};

function getProgressBarVariant(
  amount: number,
  max: number
): 'blue' | 'yellow' | 'red' {
  const ratio = amount / max;
  if (ratio < 0.5) return 'blue';
  if (ratio < 0.75) return 'yellow';
  return 'red';
}

export default BudgetCard;
