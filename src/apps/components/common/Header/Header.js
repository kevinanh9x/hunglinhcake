import React from "react";
import { Avatar, Button, Dropdown, Layout, Breadcrumb } from "antd";
import "./_header.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Translation } from "react-i18next";
import { decodeToken } from "react-jwt";
import axios from "axios";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import LOGOHL from "../../../common/assets/Logo/logo.png";
import Navigation from "../Navigation/root";

const { Header } = Layout;

const HungLinhHeader = () => {
  const dataimage = JSON.parse(localStorage.getItem("image"));

  return (
    <div className="header">
      <Header>
        <Link to="/">
          <img src={LOGOHL} className="header__logo" />
        </Link>

        <Navigation />

        <div className="header__action">
          <div className="header__action--shortcut"></div>
          <div>
            <span className="header__action--name">
              {/* {decodeprofile.fullName} */}
            </span>
          </div>
          <div className="header__avatar">
            <Dropdown
              placement="bottomRight"
              arrow
              className="dropdown"
              overlay={<HeaderMenu />}
              trigger={["click"]}
            >
              <Button type="text" className="btn-avatar">
                <Avatar className="header__avatar--img">
                  {dataimage != null ? (
                    <img
                      src={`data:image/png\jpg;base64,${dataimage.data}`}
                      className="avatar-img"
                    />
                  ) : (
                    <span>K</span>
                  )}
                </Avatar>
              </Button>
            </Dropdown>
          </div>
        </div>      
      </Header>

      <div className="nav-link-menu">
      <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to="/aboutus">Về Chúng Tôi</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to="/shop">Cửa Tiệm</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to="/blog">Tin Tức</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to="/contact">Liên Hệ</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default HungLinhHeader;
