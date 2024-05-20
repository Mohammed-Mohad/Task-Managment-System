import React, { useState } from 'react';
import { Button, Calendar, Card, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Sticker from '../../assets/Stickers/sticker.webp';
import Sticker1 from '../../assets/Stickers/sticker1.webp';
import Sticker2 from '../../assets/Stickers/sticker2.webp';
import './Styles/Timeine.css';

const Timeline = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation(); // Get translation function

  const handleVisibleChange = () => {
    setVisible(!visible);
  };

  const recentTasks = [
    { id: 1, assigner: Sticker, title: t('task1Title'), time: t('task1Time') },
    { id: 2, assigner: Sticker1, title: t('task2Title'), time: t('task2Time') },
    { id: 3, assigner: Sticker2, title: t('task3Title'), time: t('task3Time') },
  ];

  return (
    <div className="timeline">
      <div className="timeline-header">
      <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('timelineOfYear')}</span>
        <Button onClick={handleVisibleChange}>{t('juneToSeptember')} <DownOutlined /></Button>
      </div>
      {visible && <Calendar fullscreen={false} className="mini-calendar" />}
      <div className="weekdays">
        <div className='days'>07 <span className='weekday'>{t('sun')}</span> </div>
        <div className='days'>08<span className='weekday'>{t('mon')}</span> </div>
        <div className='days'>09<span className='weekday'>{t('tue')}</span> </div>
        <div className='days'>10<span className='weekday'>{t('wed')}</span> </div>
        <div className='days'>11<span className='weekday'>{t('thu')}</span> </div>
        <div className='days'>12<span className='weekday'>{t('fri')}</span></div>
        <div className='days'>13<span className='weekday'>{t('sat')}</span> </div>
      </div>
      <div className="recent-tasks">
        {recentTasks.map(task => (
          <Card className="task-card-timeline" key={task.id}>
            <Card.Meta
              avatar={<Avatar src={task.assigner || UserOutlined} />}
              title={task.title}
              description={`${task.time} ${t('leftTillDeadline')}`}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
