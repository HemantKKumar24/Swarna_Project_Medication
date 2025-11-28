// // frontend/src/components/UpcomingDoses.jsx
// import React from 'react';

// export default function UpcomingDoses({ doses, loading, error, onMarkTaken }) {
//   return (
//     <div className="bg-white shadow rounded-xl p-4">
//       <h2 className="text-lg font-semibold text-slate-800 mb-3">Upcoming doses</h2>

//       {loading && <p className="text-sm text-slate-500">Loading upcoming doses...</p>}
//       {error && <p className="text-sm text-red-500">{error}</p>}

//       {!loading && doses.length === 0 && !error && (
//         <p className="text-sm text-slate-500">No upcoming doses.</p>
//       )}

//       <ul className="space-y-2">
//         {doses.map((dose) => (
//           <li
//             key={dose.id}
//             className="flex items-center justify-between border border-slate-100 rounded-lg px-3 py-2"
//           >
//             <div>
//               <p className="text-sm font-medium text-slate-800">
//                 {dose.medication_name || dose.medication_id}
//               </p>
//               <p className="text-xs text-slate-500">
//                 {dose.dose_time
//                   ? new Date(dose.dose_time).toLocaleString()
//                   : 'Unknown time'}
//               </p>
//             </div>
//             <button
//               type="button"
//               disabled={dose.taken}
//               onClick={() => onMarkTaken && onMarkTaken(dose)}
//               className={`text-xs px-3 py-1 rounded-full ${
//                 dose.taken
//                   ? 'bg-emerald-50 text-emerald-500 border border-emerald-100 cursor-default'
//                   : 'bg-indigo-600 text-white hover:bg-indigo-700'
//               }`}
//             >
//               {dose.taken ? 'Taken' : 'Mark taken'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchUpcomingDoses,
  markDoseTaken,
} from "../store/dosesSlice";

export default function UpcomingDoses() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((s) => s.doses);

  useEffect(() => {
    dispatch(fetchUpcomingDoses());
  }, []);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="space-y-3">
      {items.map((dose) => (
        <div
          key={dose.id}
          className="p-4 bg-white shadow rounded border"
        >
          <h3 className="font-semibold">
            Dose at {new Date(dose.dose_time).toLocaleString()}
          </h3>

          <p className="text-sm text-gray-500">
            Medication ID: {dose.medication_id}
          </p>

          <p>Status: {dose.taken ? "Taken" : "Pending"}</p>

          {!dose.taken && (
            <button
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
              onClick={() => dispatch(markDoseTaken(dose.id))}
            >
              Mark Taken
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
