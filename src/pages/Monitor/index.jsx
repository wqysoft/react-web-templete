import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import api from '@/api/index.js'
const Monitor = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    api.get().then((res) => {
      setList(res.data.data)
    })
  }, [])

  return (
    <div className={styles.home}>
      {list.map((item) => {
        return (
          <div className={styles.commodity} key={item.id}>
            <p>姓名：{item.name}</p>
            <p>年龄：{item.age}</p>
            <p>生日：{item.birthday}</p>
            <p>城市：{item.city}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Monitor
