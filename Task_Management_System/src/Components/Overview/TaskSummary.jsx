import React from 'react';
import { Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles/TaskSummary.css';
import bgOne from '../../assets/BackgroundImages/bgOne.png';
import bgTwo from '../../assets/BackgroundImages/bgTwo.png';
import bgThree from '../../assets/BackgroundImages/bgThree.png';

const TaskSummary = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <div className="task-summary-container">
      <div className="header-section">
        <div className="title-and-description">
          <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('tasksSummary')}</span>
          <div className='task-summary-description'>{t('addTaskDescription')}</div>
        </div>
        <Button type="primary" icon={<PlusOutlined />} style={{ fontFamily: '"Sora", sans-serif', fontSize: '12px', height: '40px', padding: '0 20px' }}>{t('addTask')}</Button>
      </div>
      <div className="cards-container">
        <Card className="task-card" style={{backgroundImage: `url(${bgOne})`}}>
          <h1>82</h1>
          <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('upcomingTasks')}</span> 
        </Card>
        <Card className="task-card" style={{backgroundImage: `url(${bgTwo})`}}>
          <h1>12</h1>
          <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('tasksInProgress')}</span>
        </Card>
        <Card className="task-card" style={{backgroundImage: `url(${bgThree})`}}>
          <h1>127</h1>
          <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('tasksCompleted')}</span>
        </Card>
      </div>
    </div>
  );
}

export default TaskSummary;
