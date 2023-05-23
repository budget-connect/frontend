import { useBudgets } from '@/contexts/BudgetContext';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useRef } from 'react';

interface SetIncomeModalProps {
  show: boolean;
  handleClose: () => void;
}

const SetIncomeModal: React.FC<SetIncomeModalProps> = ({
  show,
  handleClose,
}) => {
  const incomeRef = useRef<HTMLInputElement>(null);
  const { setIncome } = useBudgets();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (incomeRef.current) {
      setIncome(parseFloat(incomeRef.current.value));
    }
    handleClose();
  }

  return (
    <Modal show={show} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header>New Budget</Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="income" value="Total Income" />
            </div>
            <TextInput
              ref={incomeRef}
              id="income"
              type="number"
              placeholder=""
              required
              min={0}
              step={0.01}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-end">
            <Button type="submit">Set Income</Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default SetIncomeModal;
