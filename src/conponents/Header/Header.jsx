import React from "react";
import {PageHeader} from 'antd';
import './Header.scss'

const Header = ({title, subtitle}) => {
  return (
    <PageHeader
      className="site-page-header"
      title={title}
      subTitle={subtitle}
    />
  );
}

export default Header