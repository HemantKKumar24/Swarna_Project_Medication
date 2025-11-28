export default function ScheduleList({ schedules }) {
  if (!schedules.length) {
    return <p className="text-gray-500">No schedules available.</p>;
  }

  return (
    <div className="space-y-3">
      {schedules.map((s) => (
        <div
          key={s.id}
          className="bg-white p-4 shadow rounded border"
        >
          <p>
            <strong>Recurrence:</strong> {s.recurrence}
          </p>

          <p>
            <strong>Times:</strong> {s.times.join(", ")}
          </p>

          <p>
            <strong>Days:</strong>{" "}
            {s.days_of_week.length > 0
              ? s.days_of_week.join(", ")
              : "Daily"}
          </p>

          <p className="text-sm text-gray-500">
            Created: {new Date(s.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
