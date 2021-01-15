import React from 'react';
import { Carousel } from 'antd';
import styles from './index.module.scss';
import LoginForm from './Form';

const arr = [1, 2, 3, 4]

const Login = () => {
  return (
    <div>
      <div className={styles.content}>
        <LoginForm className={styles.content__form}></LoginForm>
      </div>
      <Carousel autoplay>
        {arr.map(item => {
          return (
            <div key={item}>
              <h3 className={styles.carousel}>{item}</h3>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
}

export default Login;


