import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import TopbarUser from 'features/Topbar/TopbarUser';
import TopBarLangSwitch from 'features/Topbar/TopbarLangSwitch';

const { Item } = Breadcrumb;
const { Header, Content, Footer } = Layout;
const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
];

function HomePage() {
  const [current, setCurrent] = useState('mail');
  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo">
          <HomeOutlined />
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
          defaultSelectedKeys={['2']}
          items={items}
        />

        <>
          <TopbarUser />
          <TopBarLangSwitch />
        </>
      </Header>

      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Item>Home</Item>
          <Item>List</Item>
          <Item>App</Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <h1>
            <FormattedMessage id="Home Page" />
          </h1>
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <FormattedMessage id="BDSportsClub ©2023 Created by BDDevSe" />
      </Footer>
    </Layout>
  );
}

export default HomePage;
