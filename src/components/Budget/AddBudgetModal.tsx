import React from 'react';
import { useBudgets } from '@/contexts/BudgetContext';
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useRef } from 'react';

interface AddBudgetModalProps {
  show: boolean;
  handleClose: () => void;
}

const AddBudgetModal: React.FC<AddBudgetModalProps> = ({
  show,
  handleClose,
}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const { addBudget } = useBudgets();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nameRef.current && maxRef.current) {
      addBudget({
        name: nameRef.current.value,
        max: parseFloat(maxRef.current.value),
      });
    }
    handleClose();
  }

  return (
    <Modal show={show} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header>New Budget</Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Budget Category" />
            </div>
            <TextInput
              ref={nameRef}
              id="name1"
              type="text"
              placeholder=""
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="max" value="Maximum Spending" />
            </div>
            <TextInput
              ref={maxRef}
              id="max"
              type="number"
              placeholder=""
              required={true}
              min={0}
              step={0.01}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-end">
            <Button type="submit">Add New Budget</Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddBudgetModal;
