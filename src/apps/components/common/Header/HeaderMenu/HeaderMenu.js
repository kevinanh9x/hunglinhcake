import React from "react";
import { Avatar, Button, Divider, Menu } from "antd";
import "./_headerMenu.scss";
import { useTranslation } from "react-i18next";
import { decodeToken } from "react-jwt";
import HeaderMenuLanguage from "./HeaderMenuLanguage/HeaderMenuLanguage";
import HeaderMenuTheme from "./HeaderMenuTheme/HeaderMenuTheme";

const handleLogout = () => {
  window.localStorage.clear();
  window.location.href = "/";
};

const HeaderMenu = () => {
  const decodeprofile = decodeToken(localStorage.getItem("accessToken"));
  const { t } = useTranslation();

  const dataimage = JSON.parse(localStorage.getItem("image"));
  return (
    <div className="header__menu">
      <Menu className="menu__action" selectable>
        <div className="avatar">
          <Avatar size={50}>
            {dataimage != null ? (
              <img
                src={`data:image/png\jpg;base64,${dataimage.data}`}
                className="avatar-img"
              />
            ) : (
              <span>K</span>
            )}
          </Avatar>
          {/* <ChangeAvatar /> */}
        </div>
        <div className="avatar">
          <div className="name">
            <span>{/* {decodeprofile.fullName} */}fullName</span>
            {/* <Information /> */}
          </div>
          <div className="email">{/* {decodeprofile.email} */}email</div>
        </div>
        <Divider />
        <div className="repassword">{/* <RePassword /> */}</div>
        <Divider />
        <div className="theme"><HeaderMenuTheme /></div>
        <Divider />
        <div className="language"><HeaderMenuLanguage /></div>
        <Divider />
        <div className="logout">
          <Button onClick={handleLogout} value="Logout">
            {t("header.logout")}
          </Button>
        </div>

        <Divider />
      </Menu>
    </div>
  );
};

export default HeaderMenu;
