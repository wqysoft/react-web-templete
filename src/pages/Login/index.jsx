import React from 'react'
import { Carousel } from 'antd'
import styles from './index.module.scss'
import LoginForm from './Form'

const arr = [1, 2, 3, 4]

const Login = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content__form}>
          <LoginForm />
        </div>
      </div>
      <Carousel autoplay>
        {arr.map((item) => {
          return (
            <div key={item}>
              <h3 className={styles.carousel}>{item}</h3>
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default Login
