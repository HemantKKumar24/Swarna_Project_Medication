// frontend/src/pages/AddMedicationPage.jsx
import React, { useState } from 'react';
import MedicationForm from '../components/MedicationForm';
import { useMedicationsList } from '../hooks/useMedications';

export default function AddMedicationPage() {
  const { createMedication } = useMedicationsList();
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (payload) => {
    setSubmitting(true);
    setSuccessMsg('');
    try {
      await createMedication(payload);
      setSuccessMsg('Medication added successfully.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-3">
      <MedicationForm onSubmit={handleSubmit} submitting={submitting} />
      {successMsg && (
        <p className="text-sm text-emerald-600" data-testid="add-med-success">
          {successMsg}
        </p>
      )}
    </div>
  );
}
