import { useState } from "react";

export default function ScheduleForm({ medicationId, onSubmit }) {
  const [recurrence, setRecurrence] = useState("daily");
  const [times, setTimes] = useState(["08:00"]);
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  const toggleDay = (day) => {
    setDaysOfWeek((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const addTime = () => setTimes([...times, "08:00"]);

  const updateTime = (i, value) => {
    const updated = [...times];
    updated[i] = value;
    setTimes(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      medication_id: medicationId,
      recurrence,
      times,
      days_of_week: recurrence === "weekly" ? daysOfWeek : []
    };

    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 border shadow rounded space-y-4"
    >
      <div>
        <label className="block font-medium mb-1">Recurrence</label>
        <select
          className="border p-2 rounded w-full"
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-2">Times</label>

        {times.map((t, i) => (
          <input
            key={i}
            type="time"
            className="border p-2 rounded block mb-2"
            value={t}
            onChange={(e) => updateTime(i, e.target.value)}
          />
        ))}

        <button
          type="button"
          className="text-blue-600 underline"
          onClick={addTime}
        >
          + Add Time
        </button>
      </div>

      {recurrence === "weekly" && (
        <div>
          <label className="block font-medium mb-2">Days of Week</label>

          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (d, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleDay(i)}
                  className={`p-2 border rounded ${
                    daysOfWeek.includes(i)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {d}
                </button>
              )
            )}
          </div>
        </div>
      )}

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        type="submit"
      >
        Save Schedule
      </button>
    </form>
  );
}
