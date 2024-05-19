import React from 'react';
import { Card, Avatar, Tooltip, Row, Col } from 'antd';
import { PlusOutlined, EllipsisOutlined, ArrowRightOutlined } from '@ant-design/icons';


const TaskCard = () => {
  const columns = [
    {
      title: 'To Do',
      key: 'todo',
      dataIndex: 'todo',
    },
    {
      title: 'In Progress',
      key: 'inProgress',
      dataIndex: 'inProgress',
    },
    {
      title: 'Completed',
      key: 'completed',
      dataIndex: 'completed',
    },
    {
      title: 'Overdue',
      key: 'overdue',
      dataIndex: 'overdue',
    },
  ];

  const data = [
    {
      key: '1',
      todo: [
        {
          date: 'Today',
          title: 'Design the user interface',
          timeframe: '9 AM - 5 PM',
          avatars: ['A', 'B'],
          color: '#ffcccc',
        },
        {
          date: 'Tomorrow',
          title: 'Create task flow diagrams',
          timeframe: '10 AM - 4 PM',
          avatars: ['C'],
          color: '#ccffff',
        },
        {
          date: 'Today',
          title: 'Prepare user stories for development',
          timeframe: '1 PM - 3 PM',
          avatars: ['D', 'E'],
          color: '#ffcc99',
        },
      ],
      inProgress: [
        {
          date: 'Yesterday',
          title: 'Implement authentication system',
          timeframe: '10 AM - 4 PM',
          avatars: ['D', 'E'],
          color: '#ccffcc',
        },
        {
          date: 'Today',
          title: 'Develop the API endpoints',
          timeframe: '12 PM - 8 PM',
          avatars: ['F'],
          color: '#99ccff',
        },
        {
          date: 'Today',
          title: 'Integrate with third-party services',
          timeframe: '2 PM - 6 PM',
          avatars: ['G', 'H'],
          color: '#ffccff',
        },
      ],
      completed: [
        {
          date: 'Yesterday',
          title: 'Finalize project requirements',
          timeframe: '9 AM - 11 AM',
          avatars: ['I'],
          color: '#d9d9d9',
        },
        {
          date: 'Yesterday',
          title: 'Setup project repository',
          timeframe: '1 PM - 2 PM',
          avatars: ['J'],
          color: '#ccccff',
        },
        {
          date: 'Yesterday',
          title: 'Complete initial project setup',
          timeframe: '3 PM - 5 PM',
          avatars: ['K'],
          color: '#b3ffb3',
        },
      ],
      overdue: [
        {
          date: 'Last Week',
          title: 'Review team performance',
          timeframe: '10 AM - 11 AM',
          avatars: ['L'],
          color: '#ff6666',
        },
        {
          date: 'Last Week',
          title: 'Audit the project documentation',
          timeframe: '2 PM - 4 PM',
          avatars: ['M'],
          color: '#ff9966',
        },
        {
          date: 'Last Week',
          title: 'Plan the next sprint tasks',
          timeframe: '4 PM - 6 PM',
          avatars: ['N', 'O'],
          color: '#ff9999',
        },
      ],
    },
  ];

  const renderTasks = (tasks) => {
    return tasks.map((task, index) => (
      <Card
        key={index}
        style={{
          width: 210,
          margin: '10px 0',
          backgroundColor: task.color,
        }}
        bodyStyle={{ padding: 10 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span>{task.date}</span>
          <ArrowRightOutlined style={{ backgroundColor: 'lightgrey', borderRadius: '50%', padding: 5 }} />
        </div>
        <h4 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{task.title}</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <span>{task.timeframe}</span>
          <div>
            {task.avatars.map((avatar, idx) => (
              <Avatar key={idx} style={{ marginLeft: -10 }}>{avatar}</Avatar>
            ))}
          </div>
        </div>
      </Card>
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        {columns.map((column) => (
          <Col key={column.key} span={6}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{column.title}</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <EllipsisOutlined style={{ fontSize: '12px', marginRight: '8px', cursor: 'pointer' }} />
                <Tooltip title="Add Task">
                  <PlusOutlined style={{ color: 'blue', fontSize: '12px', cursor: 'pointer' }} />
                </Tooltip>
              </div>
            </div>
            {data[0][column.dataIndex] && renderTasks(data[0][column.dataIndex])}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TaskCard;
