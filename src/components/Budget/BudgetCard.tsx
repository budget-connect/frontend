import { Button, Card, Progress } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { currencyFormatter } from './utils';

export interface BudgetCardProps {
  name: string;
  amount: number;
  max?: number;
  gray?: boolean;
  hideButtons?: boolean;
  onAddExpenseClick?: () => void;
  onViewExpensesClick?: () => void;
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  name,
  amount,
  max,
  gray,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) => {
  return (
    <Card
      className={twMerge(
        max !== undefined && amount > max ? 'bg-red-500 bg-opacity-10' : '',
        gray ? 'bg-gray-100' : '' // last conflicting class wins
      )}
    >
      <div className="mb-3 items-baseline justify-between font-normal">
        <div className="me-2 text-lg font-bold">{name}</div>
        <div className="flex items-baseline">
          {currencyFormatter.format(amount)}
          {max && (
            <span className="ml-1 text-sm text-gray-500">
              / {currencyFormatter.format(max)}
            </span>
          )}
        </div>
      </div>
      {max && (
        <Progress
          className="rounded-full"
          color={getProgressBarVariant(amount, max)}
          // max={max}
          size="lg"
          labelProgress={true}
          progress={Number(Math.round((amount / max) * 100))}
        />
      )}
      {!hideButtons && (
        <div className="mt-4 flex gap-x-2">
          <Button
            outline={true}
            gradientDuoTone="cyanToBlue"
            className="ml-auto"
            onClick={onAddExpenseClick}
          >
            Add Expense
          </Button>
          <Button onClick={onViewExpensesClick}>View Expenses</Button>
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
