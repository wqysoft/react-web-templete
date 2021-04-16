import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import * as resourceManageThunks from "@/store/resourceManage/thunks";
import store from "@/store";

const ResourceManage = () => {
  console.log(store.getState());
  const dispatch = useDispatch();
  const devices_alarm_total = useSelector(
    ({ resourceManage }) => resourceManage.deviceTypes
  );
  console.log("devices_alarm_total", devices_alarm_total);
  let dataSource = devices_alarm_total.map(item => {
    return {
      count: item.count,
      ...item.device_type[0],
    };
  });

  useEffect(() => {
    dispatch(
      resourceManageThunks.getTypes({ level: "province", area_name: "浙江省" })
    );
  }, [dispatch]);

  const columns = [
    {
      title: "序号",
      dataIndex: "序号",
      key: "index",
      align: "center",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "设备类型",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "设备数量",
      dataIndex: "count",
      key: "count",
      align: "center",
    },
    {
      title: "设备类型编码",
      dataIndex: "DEVICETYPEID",
      key: "DEVICETYPEID",
      align: "center",
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.left_title}>
            <h3>资源数量统计</h3>
            <Button type="primary">新增机房</Button>
          </div>
          <div>sdcasdcasd</div>
        </div>
        <div className={styles.right}>
          <h3>设备告警统计</h3>
          <Table
            scroll={{ y: 250 }}
            rowKey={record => record.DEVICETYPEID}
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <h3>机房数量</h3>
      </div>
    </div>
  );
};

export default ResourceManage;
