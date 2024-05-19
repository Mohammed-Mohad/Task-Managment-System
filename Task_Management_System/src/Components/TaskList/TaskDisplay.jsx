import React from 'react';
import { Tag, Avatar, Input } from 'antd';
import './Styles/TaskDisplay.css';

const TaskDisplay = ({ tasks }) => {
  return (
    <div className="task-display">
      <div className="display-section">
        {tasks.map(task => (
          <div className="task-card" key={task.id}>
            <div className="task-details">
              <div className="priority">
                Priority: <Tag className="priority-tag">{task.priority}</Tag>
              </div>
              <div className="due-date"><strong>Due Date:</strong> {task.dueDate}</div>
              <div className="tags">
                Tags: {task.tags.map(tag => <Tag key={tag} className="task-tag">
                  <div style={{display:'flex'}}>{tag}</div>
                  </Tag>)}
              </div>
              <div className="assignees">
                Assignees: {task.assignees.map(({ name, avatar }) => (
                  <div key={name} className="assignee">
                    <Avatar src={avatar} />
                    <strong>{name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="search-section">
        <Input.Search
          placeholder="Search tasks"
          onSearch={value => console.log(value)}
          style={{ width: 300 }}
        />
      </div>
    </div>
  );
};

export default TaskDisplay;
