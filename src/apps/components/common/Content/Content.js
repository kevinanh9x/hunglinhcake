import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Carousel, Button } from "antd";
import "./_content.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuHungLinh from "../Sider/menu";
import axios from "axios";

const { Content } = Layout;

const contentStyle = {
  height: "450px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HungLinhContent = () => {
  const [idSlider, setSlider] = useState(0);

  useEffect(()=>{
    axios.get('http://localhost:3000/banner')
      .then(response => setSlider(response.data))
      .catch((e) => {console.log(e)})
  },[]);

  const [featuredProducts, setfeaturedProducts] = useState(0);

  useEffect(()=>{
    axios.get('http://localhost:3000/new_product')
      .then(response => setfeaturedProducts(response.data))
      .catch((e) => {console.log(e)})
  },[]);

  return (
    <div>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Carousel autoplay>
          <div>
            <img
              src="https://banhmyonline.com/image/cache/catalog/slider/slide-banhmy-1349x450.jpg"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://chacabanhmi.com/wp-content/uploads/2018/08/banner.jpg"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://bigcake.vn/files/thanhvien_upload/21/banner_chun_bigcake_3.jpg"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://vincake.com.vn/admin/slidetruotanh/banner-new-3_88_anhslide.jpg"
              style={contentStyle}
            />
          </div>
        </Carousel>

        <div
          className="site-layout-background content"
          style={{ padding: 24, minHeight: 380 }}
        >
          <div className="content__left">
            <MenuHungLinh />
          </div>
          <div className="content__right">
            <p className="text_mau">Mẫu mới ra mắt</p>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default HungLinhContent;
