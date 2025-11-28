// frontend/src/pages/DetailPage.jsx
import React from 'react';
import { useMedicationById } from '../hooks/useMedications';
import MedicationDetail from '../components/MedicationDetail';

export default function DetailPage({ medicationId }) {
  const medication = useMedicationById(medicationId);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <MedicationDetail medication={medication} />
    </div>
  );
}
