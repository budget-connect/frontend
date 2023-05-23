import { Button, Label, Modal } from 'flowbite-react';
import React, { useCallback, useEffect, useState } from 'react';

interface AskAiModalProps {
  show: boolean;
  prompt: string;
  handleClose: () => void;
}

const AskAiModal: React.FC<AskAiModalProps> = ({
  show,
  prompt,
  handleClose,
}) => {
  const [generatedPlan, setGeneratedPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log({ generatedPlan, isLoading, prompt });
  const generatePlan = useCallback(async () => {
    console.log('generating new plan');
    setIsLoading(true);
    const response = await fetch('/api/edge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedPlan((prev) => prev + chunkValue);
    }
    setIsLoading(false);
  }, [prompt]);

  useEffect(() => {
    if (show && prompt !== '' && !isLoading) {
      generatePlan();
    }
  }, [show, prompt, generatePlan, isLoading]);

  return (
    <Modal show={show} onClose={handleClose}>
      <Modal.Header>Ask BudgetConnect AI</Modal.Header>
      <Modal.Body>
        <div>
          <Label>BudgetConnect AI Response</Label>
          {isLoading && <div>Asking AI...</div>}
          {<span>{generatedPlan}</span>}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AskAiModal;
