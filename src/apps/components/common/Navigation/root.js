import React from "react";
import "./_root.scss";
import { Link } from "react-router-dom";
import { Menu, Breadcrumb } from "antd";

function Navigation() {
  return (
    <div className="layout-header">
      <Menu mode="horizontal" defaultSelectedKeys={["1"]} theme="dark">
        <Menu.Item key="1">
          <Link to="/aboutus">Về Chúng Tôi</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/shop">Cửa Tiệm</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/blog">Tin Tức</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/contact">Liên Hệ</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navigation;
