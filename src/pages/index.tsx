import {
  DesktopOutlined,
  HomeOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Image, Anchor } from 'antd';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

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

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const [value, setValue] = React.useState<number | null>(2);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const boxStyle = {
    boxShadow: '1px 2px 3px 4px rgba(20,20,20,0.4)',
    padding: 20,
    height: 470,
    width: 400,
    marginTop: 50,
    marginLeft: 100,
  };

  const shopStyle = {
    color: 'white',
    backgroundColor: isHover ? '#50B39D' : '#04803E',
    padding: '15px 20px ',
    fontSize: 20,
    borderRadius: 20,
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#000263' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: '#002463' }}
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
          style={{
            height: 50,
            padding: 0,
            backgroundColor: '#000263',
          }}
        >
          <img
            src="/icons/logo-matrip-oficial-01.png"
            alt="logo"
            width={50}
            style={{ marginLeft: 40, marginTop: -15 }}
          />
          <span>
            <span style={{ paddingLeft: '77%' }}>
              <a href="">
                <ShoppingCartOutlined style={{ fontSize: 35 }} />
              </a>
            </span>

            <a href="">
              <img
                src="/images/ceuma-og.jpg"
                style={{
                  width: 40,
                  marginBottom: '15px',
                  marginLeft: '15px',
                  borderRadius: 100,
                }}
              />
            </a>
            <span style={{ color: 'white', marginLeft: 10, fontSize: 16 }}>
              Olá, Ceuma
            </span>
          </span>
        </Header>

        <img src="/images/sao-luis-logo.jpg" width={'100%'} height={150} />

        <Content style={{ margin: '0 16px' }}>
          <span style={{ display: 'flex' }}>
            <div className="centro-historico" style={boxStyle}>
              <img
                src="/images/centro-historico.jpg"
                alt="centro historico"
                width={350}
                style={{ borderRadius: 20 }}
              />
              <h1 style={{ fontSize: 25, fontWeight: 'bold', margin: '0' }}>
                Centro Histórico
              </h1>
              <span>São Luis - MA</span>

              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                {/* <Typography component="legend">Controlled</Typography> */}
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <span
                style={{
                  // color: 'white',
                  // backgroundColor: '#03AB89',
                  padding: '5px 10px ',
                  fontSize: 20,
                  borderRadius: 30,
                  alignItems: 'center',
                }}
              >
                R$ 85,00
              </span>
              <br />
              <br />
              <span
                style={shopStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Adicionar
                <ShoppingCartOutlined style={{ fontSize: 35 }} />
              </span>
            </div>
            <div className="centro-historico" style={boxStyle}>
              <img
                src="/images/pescador.jpg"
                alt="centro historico"
                width={350}
                style={{ borderRadius: 20 }}
              />
              <h1 style={{ fontSize: 25, fontWeight: 'bold', margin: '0' }}>
                Praça do Pescador
              </h1>
              <span>São Luis - MA</span>

              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                {/* <Typography component="legend">Controlled</Typography> */}
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <span
                style={{
                  // color: 'white',
                  // backgroundColor: '#03AB89',
                  padding: '5px 10px ',
                  fontSize: 20,
                  borderRadius: 30,
                  alignItems: 'center',
                }}
              >
                R$ 75,00
              </span>
              <br />
              <br />
              <span
                style={shopStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Adicionar
                <ShoppingCartOutlined style={{ fontSize: 35 }} />
              </span>
            </div>
          </span>
          {/* <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Escolha seu pacote.
          </div> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Bem vindo(a) ao Matrip WebSite
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
