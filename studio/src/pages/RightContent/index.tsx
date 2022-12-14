import { QuestionCircleOutlined, InfoCircleOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Space, Modal, Dropdown, Menu, Row } from 'antd';
import React, { useState } from 'react';
import { SelectLang, useModel, FormattedMessage } from 'umi';
// import HeaderSearch from '../HeaderSearch';
import { useHistory } from 'react-router-dom';
import type { MenuProps } from 'antd';
import type { DataType } from '@/pages/DatasetList';
import DatasetList from '../DatasetList';
import styles from './index.less';
import './extra.less'

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [current, setCurrent] = useState('mail');
  const history = useHistory();

  const items: MenuProps['items'] = [
    {
      label: 'About',
      key: 'about',
      icon: <InfoCircleOutlined />,
    },
    {
      label: 'Help',
      key: 'help',
      icon: <QuestionCircleOutlined />,
    }
  ]

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (record: DataType) => {
    setIsModalOpen(false);
    setInitialState({ ...initialState, defaultDataset: record.dataset_abbr });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick = (item: any) => {
    if (item.key === 'about') {
      history.push('/about')
    } else if (item.key === 'help') {
      history.push('/help')
    }
  };

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={`${className} right-content`}>
      <Menu onClick={onClick} selectedKeys={[current]} theme="dark" mode="inline" items={items} />
      <Row>
        <Dropdown.Button overlay={<></>}
          onClick={showModal}
          className="dataset-selector-btn"
          icon={
            <span onClick={showModal}>
              <DatabaseOutlined />&nbsp;
              <FormattedMessage id="pages.RightContent.selectDataset" defaultMessage="Select Dataset" />
            </span>
          }>
          {initialState.defaultDataset}
        </Dropdown.Button>
        <Modal className="dataset-selector" width={'80%'} onCancel={handleCancel}
          title="Select Dataset" visible={isModalOpen} footer={null}>
          <DatasetList selectDataset={handleOk}></DatasetList>
        </Modal>
      </Row>
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
