import React from "react";
import FooterHungLinh from "../common/Footer/Footer";
import HungLinhHeader from "../common/Header/Header";
import { Form, Input, Button, Select } from "antd";
import { FormInstance } from "antd/es/form";
import Map from '../common/Map/Map';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const key = 'AIzaSyDR1FVIo7tQ0wokq32yG9nLP9AYvAECefg'

export const Contacts = (props) => {
  return (
    <div>
      <HungLinhHeader />
      <div class="contacts">
        <div className="contacts__left">
          <p>Liên Hệ Với Chúng Tôi</p>
        </div>
        <div className="contacts__right">
          <p>Gửi yêu cầu đặt bánh</p>
        </div>
      </div>

      <div class="contacts__full">
        <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
      </div>

      <FooterHungLinh />
    </div>
  );
};

export default Contacts;
