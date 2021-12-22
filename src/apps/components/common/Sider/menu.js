import React from "react";
import { Menu } from "antd";
import "./_menu.scss";
import {
  SettingOutlined,
} from "@ant-design/icons";

export const MenuHungLinh = (props) => {
  const { SubMenu } = Menu;

  function handleClick(e) {
    console.log("click", e);
  }
  return (
    <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
      <SubMenu key="sub1" icon={<SettingOutlined />} title="Các Loại Bánh">
        <Menu.ItemGroup title="Bánh">
          <Menu.Item key="1">Bánh Mỳ</Menu.Item>
          <Menu.Item key="2">Bánh Pizza</Menu.Item>
          <Menu.Item key="2">Bánh Bao</Menu.Item>
          <Menu.Item key="2">Bánh Quẩy</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Bánh Mỳ">
          <Menu.Item key="3">Bánh Mỳ Chuột</Menu.Item>
          <Menu.Item key="4">Bánh Mỳ Cua</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<SettingOutlined />} title="Các Loại Bánh ngon">
        <Menu.Item key="5">Bánh Mỳ</Menu.Item>
        <Menu.Item key="6">Bánh Pizza</Menu.Item>
        <SubMenu key="sub3" title="Bánh Mỳ">
          <Menu.Item key="7">Bánh Mỳ Chuột</Menu.Item>
          <Menu.Item key="8">Bánh Mỳ Cua</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Bánh Pizza">
        <Menu.Item key="9">Đề Bánh Pizza Mỏng</Menu.Item>
        <Menu.Item key="10">Bánh Pizza Hải Sản</Menu.Item>
        <Menu.Item key="11">Bánh Pizza Bò</Menu.Item>
        <Menu.Item key="12">Bánh Pizza Thập Cẩm</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuHungLinh;
