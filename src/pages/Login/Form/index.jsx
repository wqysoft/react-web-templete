import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { Form, Input, Button } from 'antd'
import { useHistory, Link } from 'react-router-dom'

const table = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAHlBMVEVHcEz///+LrOuFq+eGq+eGqueHrOiFqub////C1PLgc7nMAAAAB3RSTlMAgB7rl81ZAcX/fAAAAXZJREFUWMOV1jFqw0AQRuEhhNR7BENC0psEt8ZNDpDCbcgRYpupp/vnBLpuCslysLRavek/niQGNFbsNi9f3piPg5nFTTz6itmb6ZY5riEXMwWKuO9NY+bNTz/WmNed/5rGzKdvrTnPfjaNmaN/t8mTX0xjZuebNnnwk2nMuNuKcTeNGUT6DCPBiQonwYnKSOqrckeCExVOghMVToITdZwkJ+o4SU6uC01IcDIsNCLBSb/QjAQnKpwEJyqcBCfqOElO6pk6SU6qmQWSnNQySyQ5qWQWSXIyn1kmyclspkGSE5Xmj28ywUkts0SCk/nM9ewBmeG4IpnhhAOZ4VCsT1c7R+uTlaMXZvYNkrMHvJqZyTdQMwOJOk6Sk+tlQ0hyMlw2iCQn04Vuk+BkkhHPrCD9Qr9vCOkXektInzkjku7uJ0TUcZL4waSOvr6U8CPfrcBaEpz8y4hnxDPiGfGMeEY8I54Rz4hnxDPiGfGMeEY8I54Rz2ASfzwte7EhQL3+AAAAAElFTkSuQmCC"
const code = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEyHquiGqueGq+iGq+eHrOmGq+eFqueGqueNsO6JrOeHq+eUru2Fqub6x9OvAAAADXRSTlMAXLyHqEiY9eQSKXELCCPK/wAAAcRJREFUWMPt1jFLw1AUBeBTQgs1ix0cC/IGFyn4B7Jo14KL1MVBkbu5uDgFxMUsgmsGwc2pYH9AoJPo4FKFgnL/i0OfbdL2mXcQRKpnKn18PYXb3FdEOpdVALHqEEAwf6qL3iwjiHgS8AQnPKnxZK7GgwTtaVqWHLfbO5YMc8dXluTTtMQmUNW33HFrOUldRETuXeRBRER2iy1NVdV1F3lWVdWtIqnMkPb2ZC4ugqxIctN3kpAnyHgS8gQRTwKeIMqRy7OzUw9S40YJAFh1kcckSZLkfmmfl++QA0sajcaaJe+NaRYtpfDr1RcvIIi8tuVsDUuQ8STkCTKehDzBYExGxpjNvfnAkXj8ie/wzz9RVX1JxxkAeLKvXaRZHN+5vRtco5zcNxyZqfEiFZ4Ua/xIhSeFGk9SFZEjVX0VkcN+v99R1Q0RKZno5+rr2Ybd8h/BJ7nhSe9HyK/7YtVYdWiMaY3F6MIYU2a6fqtvtoYkC2rA14CvAV/jsZ/2k2liP4KSe3/5ST1N0zS9Zkjo/G/pTsaTkCeIeBLwBBFPAp4g4kmNJzjhSY0nuP2rj9gkHZ7c8WQlpgm6PKnyBE2eVHiCjCfhB4/kuLSh1hUaAAAAAElFTkSuQmCC"

const LoginForm = () => {
  const [isQrCode, setIsQrCode] = useState(false);
  const history = useHistory()

  const handleFinish = () => {
    history.replace('/')
  }

  return (
    <div className={styles.login}>
      <img src={isQrCode ? code : table}
        className={styles.qr_code_icon}
        onClick={() => setIsQrCode(!isQrCode)}
        alt="icon"
      />
      <h6 className={styles.login__title}>{`${isQrCode ? '账号密码' : '快速'}登录`}</h6>
      {isQrCode ?
        <div className={styles.qr_code}>
          <img src="https://reg.163.com/services/getUrlQrcode?uuid=938226ce83e809de402d52e83f43ea76&size=340" alt="" />
          <p>打开xxx扫一扫登录</p>
        </div>
        :
        <Form>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名！',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
              size="large"
              className={styles.login__input}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="密码"
              className={styles.login__input}
            />
          </Form.Item>
        </Form>
      }
      <Button type="primary" onClick={handleFinish} className={styles.login__btn}>
        登录
      </Button>
      <div className={styles.login__footer}>
        <Link to="">注册</Link>
        <Link to="">忘记密码?</Link>
      </div>
    </div>
  );
}

export default LoginForm;


