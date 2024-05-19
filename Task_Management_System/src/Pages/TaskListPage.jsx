import React, { useState } from 'react';
import TaskDisplay from '../Components/TaskList/TaskDisplay';
import TaskCard from '../Components/TaskList/TaskCard';
import './Styles/TaskListPage.css';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      priority: "Medium",
      dueDate: "2024-05-15",
      tags: ['UI/UX', 'Frontend'],
      assignees: [
        { name: 'John Doe', avatar: 'url_to_avatar' },
        { name: 'Jane Smith', avatar: 'url_to_avatar' }
      ]
    },
    // More task objects can be added here
  ]);

  return (
    <div className="tasklist-page">
      <div className="display-section">
        {/* Display section content */}
        <TaskDisplay tasks={tasks} />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskListPage
