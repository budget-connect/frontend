import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '@/contexts/BudgetContext';
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import React, { useRef } from 'react';

interface AddExpenseModalProps {
  show: boolean;
  handleClose: () => void;
  defaultBudgetId: string;
}

const AddExpenseModal: React.FC<AddExpenseModalProps> = ({
  show,
  handleClose,
  defaultBudgetId,
}) => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const budgetIdRef = useRef<HTMLSelectElement>(null);
  const { addExpense, budgets } = useBudgets();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (descriptionRef.current && amountRef.current && budgetIdRef.current) {
      addExpense({
        description: descriptionRef.current.value,
        amount: parseFloat(amountRef.current.value),
        budgetId: budgetIdRef.current.value,
      });
    }
    handleClose();
  }

  return (
    <Modal show={show} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header>New Expense</Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <Label
              className="block mb-2"
              value="Description"
              htmlFor="description"
            >
              Description
            </Label>
            <TextInput
              id="description"
              ref={descriptionRef}
              type="text"
              required
            />
          </div>
          <div className="mb-3">
            <Label htmlFor="amount" className="block mb-2">
              Amount
            </Label>
            <TextInput
              id="amount"
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </div>
          <div className="mb-3">
            <Label
              htmlFor="budgetId"
              className="block mb-2"
              value="Budget"
            ></Label>
            <Select
              id="budgetId"
              defaultValue={defaultBudgetId}
              ref={budgetIdRef}
              className="w-full"
              required
            >
              <option value={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Add</Button>
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
};

export default AddExpenseModal;
