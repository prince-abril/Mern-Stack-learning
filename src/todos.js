let todos = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and vegetables",
      status: "pending",
      createdAt: "2025-09-02T10:15:00.000Z",
      deadline: "2025-09-09T18:00:00.000Z" // upcoming
    },
    {
      id: 2,
      title: "Finish project report",
      description: "Complete final draft and send to manager",
      status: "in-progress",
      createdAt: "2025-09-01T14:30:00.000Z",
      deadline: "2025-09-08T09:00:00.000Z" // upcoming
    },
    {
      id: 3,
      title: "Workout session",
      description: "1-hour gym workout with cardio and weights",
      status: "done",
      createdAt: "2025-08-30T07:45:00.000Z",
      deadline: "2025-08-30T09:00:00.000Z" // overdue but done ✅
    },
    {
      id: 4,
      title: "Call plumber",
      description: "Fix leaking kitchen sink",
      status: "pending",
      createdAt: "2025-09-02T08:00:00.000Z",
      deadline: "2025-09-03T12:00:00.000Z" // overdue ❌
    },
    {
      id: 5,
      title: "Read book",
      description: "Read 20 pages of 'Atomic Habits'",
      status: "in-progress",
      createdAt: "2025-08-31T21:10:00.000Z",
      deadline: "2025-09-10T22:00:00.000Z" // upcoming
    },
    {
      id: 6,
      title: "Doctor appointment",
      description: "Routine health checkup",
      status: "pending",
      createdAt: "2025-09-05T09:00:00.000Z",
      deadline: "2025-09-06T11:00:00.000Z" // upcoming
    },
    {
      id: 7,
      title: "Pay electricity bill",
      description: "Pay via online banking",
      status: "pending",
      createdAt: "2025-08-25T10:00:00.000Z",
      deadline: "2025-08-31T23:59:00.000Z" // overdue ❌
    },
    {
      id: 8,
      title: "Team meeting",
      description: "Weekly sync with project team",
      status: "done",
      createdAt: "2025-09-01T08:30:00.000Z",
      deadline: "2025-09-01T09:00:00.000Z" // overdue but done ✅
    },
    {
      id: 9,
      title: "Car service",
      description: "Full service at workshop",
      status: "in-progress",
      createdAt: "2025-09-04T07:00:00.000Z",
      deadline: "2025-09-07T15:00:00.000Z" // upcoming
    },
    {
      id: 10,
      title: "Submit assignment",
      description: "College project submission",
      status: "pending",
      createdAt: "2025-08-28T16:00:00.000Z",
      deadline: "2025-09-01T12:00:00.000Z" // overdue ❌
    }
  ];
  
module.exports = todos;
  