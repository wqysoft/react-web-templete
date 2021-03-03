import { Button } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.module.scss';
import resourceManageApi from '@/api/resourceManage';

const ResourceManage = () => {
  // useEffect(() => {
  //   resourceManageApi.getCountByType({level: 'province', area_name: '浙江省'}).then((res)=> {
  //     console.log(res.data)
  //   })
  // }, [])
    return (
      <div className={styles.root}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h3>资源数量统计</h3>
            <Button type="primary">新增机房</Button>
            </div>
          <div className={styles.right}>
            <h3>设备分类统计</h3>
            </div>
        </div>
        <div className={styles.bottom}>
          <h3>机房数量</h3>
        </div>
      </div>
    );
  }

export default ResourceManage;


