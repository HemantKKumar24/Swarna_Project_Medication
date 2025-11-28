// frontend/src/pages/ListPage.jsx
import React from 'react';
import MedicationList from '../components/MedicationList';
import { useMedicationsList } from '../hooks/useMedications';

export default function ListPage({ onSelectMedication }) {
  const { medications, status, error, refetch } = useMedicationsList();

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Medication Manager</h1>
        <button
          type="button"
          onClick={refetch}
          className="text-xs px-3 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
        >
          Refresh
        </button>
      </div>

      <MedicationList
        medications={medications}
        loading={status === 'loading'}
        error={error}
        onSelect={onSelectMedication}
      />
    </div>
  );
}
