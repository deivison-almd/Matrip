import {
  DesktopOutlined,
  HomeOutlined,
  SettingOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';

import '../styles/Home.module.css';

import 'antd/dist/antd.variable.min.css';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Inicio', '1', <HomeOutlined />),
  getItem('Passeios', '2', <DesktopOutlined />),

  getItem('Hospedagem', 'sub2', <ShopOutlined />, [
    getItem('Hoteis', '3'),
    getItem('Pousadas', '4'),
  ]),
  getItem('Configurações', 'sub3', <SettingOutlined />, [
    getItem('Pagamento', '5'),
    getItem('Privacidade', '6'),
  ]),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        style={{ backgroundColor: '#000263' }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          style={{ backgroundColor: '#000263' }}
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ height: 70, padding: 0, backgroundColor: '#000263' }}
        >
          <img
            src="/icons/logo-matrip-oficial-01.png"
            alt="logo"
            width={70}
            style={{ marginLeft: 40 }}
          />
        </Header>
        <img src="/images/sao-luis-logo.jpg" width={'100%'} height={200} />
        <Content style={{ margin: '0 16px' }}>
          <a href="/">
            <div style={{ marginTop: 50, marginLeft: 100 }}>
              <img
                src="/images/centro-historico.jpg"
                alt="centro historico"
                width={400}
                style={{ boxShadow: '5px 5px black' }}
              />
              <h1 style={{ fontSize: 25, fontWeight: 'bold', margin: 20 }}>
                Centro Histórico
              </h1>
            </div>
          </a>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Escolha seu pacote.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Bem vindo(a) ao Matrip WebSite
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
