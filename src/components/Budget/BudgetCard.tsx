import { Button, Card, Progress } from 'flowbite-react';
import { currencyFormatter } from './utils';

interface BudgetCardProps {
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
      className={
        max !== undefined && amount > max
          ? 'bg-red-500 bg-opacity-10'
          : gray
          ? 'bg-gray-100'
          : ''
      }
    >
      <div className="d-flex justify-between items-baseline font-normal mb-3">
        <div className="me-2">{name}</div>
        <div className="flex items-baseline">
          {currencyFormatter.format(amount)}
          {max && (
            <span className="text-gray-500 text-sm ml-1">
              / {currencyFormatter.format(max)}
            </span>
          )}
        </div>
      </div>
      {max && (
        <Progress
          className="rounded-full"
          color={getProgressBarVariant(amount, max)}
          // min={0}
          // max={max}
          size="lg"
          labelProgress={true}
          progress={Number(Math.round((amount / max) * 100))}
        />
      )}
      {!hideButtons && (
        <div className="flex gap-x-2 mt-4">
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
