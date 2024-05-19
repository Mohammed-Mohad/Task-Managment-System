import React from 'react';
import { Breadcrumb } from 'antd';
import './Header.css'; 
import { CalendarOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectSelectedItem } from '../../features/sidebar/sidebarSlice';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Header = () => {
  const selectedItem = useSelector(selectSelectedItem);
  const { t } = useTranslation(); // Get translation function

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', {
    month: 'long',
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="header">
      <div className="breadcrumbs-title-date">
        <div className='breadcrumbs-title'>
          <div>
            <Breadcrumb separator="/" >
              <Breadcrumb.Item className="breadcrumb-item">{t('home')}</Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item">{t(selectedItem)}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="title">{t(selectedItem)}</h1> 
        </div>     
        <span className="date">
          <CalendarOutlined style={{ marginRight: '8px' }} />
          {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default Header;
