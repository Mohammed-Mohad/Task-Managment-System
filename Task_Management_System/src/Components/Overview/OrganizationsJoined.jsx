import React from 'react';
import { Avatar, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, TeamOutlined, SafetyOutlined, CalendarOutlined } from '@ant-design/icons';

import Google from '../../assets/Logo/google.png';
import Amazon from '../../assets/Logo/amazon.png';
import EBS from '../../assets/Logo/ebs.png';
import GPT from '../../assets/Logo/gpt.png';
import Facebook from '../../assets/Logo/facebook.jpg';
import Microsoft from '../../assets/Logo/microsoft.webp';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Styles/OrganizationsJoined.css';

const OrganizationsJoined = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <div className="organizations-joined">
      <div className='organizations-joined-title-link'>
      <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('organizationsJoined')}</span>
        <Link to="/organizations" style={{fontFamily:'"Sora", san-serif', fontWeight:'600', fontSize:'14px', textDecoration:'none'}}>{t('seeAll')}</Link>
      </div>
      {/* Profile pictures of organizations joined */}
      <div className="organizations-profile-pictures">
        <Avatar size={33} src={Google} className='organization-avatar' />
        <Avatar size={33} src={Facebook} className='organization-avatar' />
        <Avatar size={33} src={Microsoft} className='organization-avatar' />
        <Avatar size={33} src={Amazon} className='organization-avatar' />
        <Avatar size={33} src={EBS} className='organization-avatar' />
        <Avatar size={33} src={GPT} className='organization-avatar' />
        {/* Add more Avatars for additional organizations */}
      </div>
      {/* Task types */}
      <div className="task-types">
      <span style={{fontFamily:'"Sora", san-serif', fontWeight:'600'}}>{t('taskTypes')}</span>
        <div className="tags">
          <Tag color="blue" className='tag' icon={<UserOutlined />}>{t('design')}</Tag>
          <Tag color="green" className='tag' icon={<TeamOutlined />}>{t('developmentTeam')}</Tag>
          <Tag color="orange" className='tag' icon={<SafetyOutlined />}>{t('dataAtRisk')}</Tag>
          <Tag color="purple" className='tag' icon={<CalendarOutlined />}>{t('meeting')}</Tag>
          {/* Add more tags for additional task types */}
        </div>
      </div>
    </div>
  );
}

export default OrganizationsJoined;
