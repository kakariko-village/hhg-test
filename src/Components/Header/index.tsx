import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

function Header() {
  const location = useLocation();
  const route = location.pathname.replace('/', '');
  return (
    <Menu
      className="header__menu"
      defaultSelectedKeys={[route] || ['1']}
      mode="horizontal"
      style={{ marginBottom: 20 }}
    >
      <Menu.Item key="counter">
        <Link to="/counter">Counter</Link>
      </Menu.Item>
      <Menu.Item key="users">
        <Link to="/users">Users</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
