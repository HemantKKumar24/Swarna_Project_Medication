// // frontend/src/components/MedicationDetail.jsx
// import React from 'react';

// export default function MedicationDetail({ medication }) {
//   if (!medication) {
//     return (
//       <div className="bg-white shadow rounded-xl p-4">
//         <p className="text-sm text-slate-500">Medication not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white shadow rounded-xl p-4 space-y-3">
//       <h2 className="text-xl font-semibold text-slate-800">{medication.name}</h2>
//       {medication.instructions && (
//         <p className="text-sm text-slate-700">{medication.instructions}</p>
//       )}

//       <p className="text-xs text-slate-500">
//         Status:{' '}
//         <span className="font-medium">
//           {medication.is_active ? 'Active' : 'Inactive'}
//         </span>
//       </p>
//     </div>
//   );
// }





import { useEffect} from "react";
import ScheduleList from "./ScheduleList";
import ScheduleForm from "./ScheduleForm";
import {
  fetchSchedulesForMedication,
  createSchedule,
  generateDoses,
} from "../store/scheduleSlice";
import { fetchMedications } from "../store/medicationsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MedicationDetail({ medicationId }) {
  const dispatch = useDispatch();
  const { items: medications } = useSelector((s) => s.medications);
  const { items: schedules } = useSelector((s) => s.schedule);

  const med = medications.find((m) => m.id === medicationId);

  useEffect(() => {
    dispatch(fetchMedications());
    dispatch(fetchSchedulesForMedication(medicationId));
  }, [medicationId]);

  const handleCreateSchedule = async (payload) => {
    const res = await dispatch(createSchedule(payload));

    if (res.meta.requestStatus === "fulfilled") {
      const newSchedule = res.payload;
      dispatch(generateDoses(newSchedule.id));
      dispatch(fetchSchedulesForMedication(medicationId));
    }
  };

  if (!med) return <p>Loading medication...</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{med.name}</h2>

      <h3 className="text-xl font-semibold">Schedules</h3>
      <ScheduleList schedules={schedules} />

      <h3 className="text-xl font-semibold">Add New Schedule</h3>
      <ScheduleForm
        medicationId={medicationId}
        onSubmit={handleCreateSchedule}
      />
    </div>
  );
}
