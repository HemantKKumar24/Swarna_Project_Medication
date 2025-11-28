// frontend/src/pages/DosesPage.jsx
import React from 'react';
import UpcomingDoses from '../components/UpcomingDoses';
import { useUpcomingDoses } from '../hooks/useDoses';

export default function DosesPage() {
  const { doses, status, error, refetch, markTaken } = useUpcomingDoses();

  const handleMarkTaken = async (dose) => {
    try {
      await markTaken(dose.id);
      refetch();
    } catch (err) {
      // In a real app, show toast. For now log:
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Upcoming doses</h1>
        <button
          type="button"
          onClick={refetch}
          className="text-xs px-3 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
        >
          Refresh
        </button>
      </div>

      <UpcomingDoses
        doses={doses}
        loading={status === 'loading'}
        error={error}
        onMarkTaken={handleMarkTaken}
      />
    </div>
  );
}
