import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function App() {
  const [filter, setFilter] = useState("All");

  const interviewData = [
    {
      candidate: "Yamini",
      interviewer: "Priya",
      date: "2026-06-26",
    },
    {
      candidate: "Rahul",
      interviewer: "Rajesh",
      date: "2026-06-28",
    },
    {
      candidate: "Anjali",
      interviewer: "Priya",
      date: "2026-06-29",
    },
    {
      candidate: "Kiran",
      interviewer: "Anil",
      date: "2026-07-05",
    },
    {
      candidate: "Sneha",
      interviewer: "Rajesh",
      date: "2026-07-10",
    },
    {
      candidate: "Vikram",
      interviewer: "Priya",
      date: "2026-07-14",
    },
    {
      candidate: "Arjun",
      interviewer: "Anil",
      date: "2026-07-18",
    },
    {
      candidate: "Meghana",
      interviewer: "Rajesh",
      date: "2026-07-22",
    },
    {
      candidate: "Akhil",
      interviewer: "Priya",
      date: "2026-08-03",
    },
    {
      candidate: "Divya",
      interviewer: "Anil",
      date: "2026-08-07",
    },
  ];

  const today = new Date();

  const filteredData =
    filter === "All"
      ? interviewData
      : interviewData.filter(
          (item) =>
            item.interviewer === filter
        );

  const events = filteredData.map((item) => {
    const interviewDate = new Date(item.date);

    const status =
      interviewDate < today
        ? "Completed"
        : "Scheduled";

    return {
      title: `${item.candidate} - ${item.interviewer} - ${status}`,
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

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label>
          Filter by Interviewer:
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
          <option>Priya</option>
          <option>Rajesh</option>
          <option>Anil</option>
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
