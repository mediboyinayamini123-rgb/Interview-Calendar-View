import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function App() {
  const [filter, setFilter] = useState("All");

  const interviewData = [
    {
      candidate: "Yamini Technical Interview",
      type: "Technical",
      date: "2026-06-26",
    },
    {
      candidate: "Rahul Technical Interview",
      type: "Technical",
      date: "2026-06-28",
    },
    {
      candidate: "Anjali HR Interview",
      type: "HR",
      date: "2026-06-29",
    },
    {
      candidate: "Kiran Final Round Interview",
      type: "Final Round",
      date: "2026-07-05",
    },
    {
      candidate: "Sneha Technical Interview",
      type: "Technical",
      date: "2026-07-10",
    },
    {
      candidate: "Vikram HR Interview",
      type: "HR",
      date: "2026-07-14",
    },
    {
      candidate: "Arjun Technical Interview",
      type: "Technical",
      date: "2026-07-18",
    },
    {
      candidate: "Meghana Final Round Interview",
      type: "Final Round",
      date: "2026-07-22",
    },
    {
      candidate: "Akhil HR Interview",
      type: "HR",
      date: "2026-08-03",
    },
    {
      candidate: "Divya Technical Interview",
      type: "Technical",
      date: "2026-08-07",
    },
  ];

  const today = new Date();

  const filteredData =
    filter === "All"
      ? interviewData
      : interviewData.filter(
          (item) => item.type === filter
        );

  const events = filteredData.map((item) => {
    const interviewDate = new Date(item.date);

    const status =
      interviewDate < today
        ? "Completed"
        : "Scheduled";

    return {
      title: `${item.candidate} - ${status}`,
      date: item.date,
    };
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Interview Calendar View
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Filter Interviews:
        </label>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          style={{
            marginLeft: "10px",
            padding: "5px",
          }}
        >
          <option>All</option>
          <option>Technical</option>
          <option>HR</option>
          <option>Final Round</option>
        </select>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="90vh"
        eventDisplay="block"
      />
    </div>
  );
}

export default App;
