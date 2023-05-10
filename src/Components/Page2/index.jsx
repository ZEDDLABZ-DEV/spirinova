import React from "react";
import FeatherIcon from "feather-icons-react";
import { DataTable } from "../Common/Table";

import "./index.scss";
import Toolbar from "../Common/Toolbar";

const Page2 = () => {
  const columns = [
    {
      title: "NAME",
      key: "name",
      dataIndex: "name",
      render: (record) => (
        <div className="flex">
          <FeatherIcon icon="folder" className="text-[#F6C358] w-[18px]" />{" "}
          &nbsp;
          {record}
        </div>
      ),
    },

    {
      title: "SIZE",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "TYPE",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "MODIFIED",
      dataIndex: "modified",
      key: "modified",
    },
  ];

  const data = [
    {
      key: 1,
      name: "test",
      size: "543MB",
      type: "ma",
      modified: "2023-04-15 14:07:57",
    },
  ];

  return (
    <div className="dashboard">
      <div className="main-content-wrapper">
        <div className="flex flex-1 flex-col">
          <h1>Assets</h1>

          <div className="flex tabs-wrapper py-10">
            <div className="flex gap-3 flex-1">
              <div className="flex p-2 text-[16px] font-[600] justify-center w-[100px] border-b-4 border-[#0171FE]">
                Input
              </div>
              <div className="flex p-2  text-[16px] font-[600] justify-center w-[100px] border-b-4 ">
                Output
              </div>
            </div>
            <div className="">
              <div className="flex h-[50px] container p-2">
                <input
                  className=" w-[250px] placeholder:text-[14px] placeholder:text-[#949DA4] "
                  placeholder="Search in current directory"
                />
                <FeatherIcon
                  icon="search"
                  className="w-[14px] text-[#949DA4]"
                />
              </div>
            </div>
          </div>
          <Toolbar />

          <div className="flex flex-col py-8">
            <span className="pb-4">Root Directory</span>
            <div className="container">
              <DataTable columns={columns} data={data} pagination={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Page2 };
