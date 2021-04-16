import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="页面找不到了~~~"
    extra={
      <Button type="primary">
        <Link to="/">去首页</Link>
      </Button>
    }
  ></Result>
);

export default NotFound;
