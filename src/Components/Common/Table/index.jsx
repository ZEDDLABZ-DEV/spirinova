import React from "react";
import { Table } from "antd";
import "./index.scss";

const DataTable = (props) => {
  const { columns, data, pagination } = props;

  return <Table columns={columns} dataSource={data} pagination={pagination} />;
};

export { DataTable };
