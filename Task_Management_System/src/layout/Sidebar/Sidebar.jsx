import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Switch, Typography, Select, Modal, Button } from 'antd'; // Added Modal
import {
  MenuOutlined,
  AppstoreOutlined,
  BellOutlined,
  SettingOutlined,
  SunOutlined,
  QuestionCircleOutlined,
  MoonOutlined,
  TeamOutlined,
  BuildOutlined,
  GlobalOutlined // Added GlobalOutlined for language icon
} from '@ant-design/icons';
import Profile_image from '../../assets/Images/Profile_Image.jpg';
import { useDispatch } from 'react-redux';
import { setSidebarItem } from '../../features/sidebar/sidebarSlice';
import { useTranslation } from 'react-i18next'; // Added useTranslation
import './Sidebar.css'; // External stylesheet

const { Sider } = Layout;
const { Text } = Typography;
const { Option } = Select;

const Sidebar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation(); // Added useTranslation

  const [visible, setVisible] = useState(false); // State to control modal visibility
  const [step, setStep] = useState(0); // State to keep track of the tour steps
  const [customModalPosition, setCustomModalPosition] = useState({}); // State for storing custom modal positions

  const menuRef = React.createRef(); // Reference to the menu container

  useEffect(() => {
    if (menuRef.current && visible) {
      setCustomPositionForStep(step);
    }
  }, [step, visible]);

  const setCustomPositionForStep = (step) => {
    // Define custom positions for each step as needed
    const customPositions = {
      0: { top: 150, left: -250 },
      1: { top: 200, left: -250 },
      2: { top: 250, left: -250 },
      3: { top: 300, left: -250 },
      // Add more custom positions for other steps
    };

    setCustomModalPosition(customPositions[step] || { top: 0, left: 0 });
  };

  // Function to handle the tour start and steps
  const handleMenuItemClick = (item) => {
    dispatch(setSidebarItem(item));
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const startTour = () => {
    setVisible(true); // Show the modal on tour start
  };

  const handleNextStep = () => {
    setStep(step + 1); // Move to the next step of the tour
  };

  const handleCancel = () => {
    setVisible(false); // Close the modal
    setStep(0); // Reset the tour steps
  };

  // Content for each step of the tour
  const tourContent = [
    {
      title: 'Step 1: Overview',
      content: 'This section provides an overview of the app.',
    },
    {
      title: 'Step 2: Task List',
      content: 'Here you can manage and track your tasks.',
    },
    {
      title: 'Step 3: Notification',
      content: 'Here you can manage and track your tasks.',
    },
    {
      title: 'Step 4: Settings',
      content: 'Here you can manage and track your tasks.',
    },
    // Add content for other steps as needed
  ];

  return (
    <Sider width={250} style={{ height: '100vh', overflowY: 'auto' }}>
      <div className="logo">
        <span className="taskmate">Task<span className="orange">Mate</span></span>
        <span className="motto">Process, Prioritize, Execute</span>
      </div>
      <div className="account-info">
        <div className="profile">
          <Avatar size={48} src={Profile_image} />
        </div>
        <div className="details">
          <p className="name">Kebede Ewqetu</p>
          <p className="username">@Kenewqet</p>
        </div>
      </div>
      <div ref={menuRef} className="menu-container">
        <Menu theme="light" mode="inline" defaultOpenKeys={['menu']}>
          <Menu.SubMenu key='menu' title='Menu' icon={<MenuOutlined />}>
            <Menu.Item key="overview" icon={<AppstoreOutlined />} onClick={() => handleMenuItemClick("Overview")}>
              <Link to="/">{t('overview')}</Link>
            </Menu.Item>
            <Menu.Item key="tasklist" icon={<MenuOutlined />} onClick={() => handleMenuItemClick("TasksList")}>
              <Link to="/tasklist">{t('tasklist')}</Link>
            </Menu.Item>
            <Menu.Item key="notifications" icon={<BellOutlined />} onClick={() => handleMenuItemClick("Notifications")}>
              <Link to="/notifications">{t('notifications')}</Link>
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />} onClick={() => handleMenuItemClick("Settings")}>
              <Link to="/settings">{t('settings')}</Link>
            </Menu.Item>
            <Menu.Item key="language" icon={<GlobalOutlined />} onClick={() => {}}>
              <Select defaultValue={i18n.language} onChange={changeLanguage}>
                <Option value="en">English</Option>
                <Option value="am">Amharic</Option>
                <Option value="om">Oromo</Option>
                <Option value="ti">Tigrigna</Option>
                <Option value="so">Somali</Option>
              </Select>
            </Menu.Item>
            <Menu.Item key="help" icon={<QuestionCircleOutlined />} onClick={startTour}>
              {t('help')}
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="groups" title="Groups" icon={<TeamOutlined />} >
            <Menu.Item key="org1" icon={<BuildOutlined/>} onClick={() => handleMenuItemClick("Organization1")}>
              <Link to="/organization/org1">{t('org1')}</Link>
            </Menu.Item>
            <Menu.Item key="org2" icon={<BuildOutlined/>} onClick={() => handleMenuItemClick("Organization2")}>
              <Link to="/organization/org2">{t('org2')}</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
      <Modal
        visible={visible}
        title={tourContent[step].title}
        onOk={handleNextStep}
        onCancel={handleCancel}
        style={{ top: customModalPosition.top, left: customModalPosition.left }}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="next" type="primary" onClick={handleNextStep}>
            Next
          </Button>,
        ]}
      >
        <p>{tourContent[step].content}</p>
      </Modal>
    </Sider>
  );
};

export default Sidebar;
