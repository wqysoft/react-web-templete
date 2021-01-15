import React, { Component } from 'react';
import { QrcodeOutlined } from '@ant-design/icons'

class LoginForm extends Component {

  render() {
    return (
      <div {...this.props}>
        <QrcodeOutlined rotate={90}></QrcodeOutlined>
      </div>
    );
  }
}

export default LoginForm;


