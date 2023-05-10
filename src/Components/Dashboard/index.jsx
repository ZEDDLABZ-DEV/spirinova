import React from "react";
import FeatherIcon from "feather-icons-react";
import SemiCircleProgress from "react-progressbar-semicircle";
import { Line } from "../Common/Charts/Line";
import { StatsComponent } from "../Common/StatsComponent";
import { DataTable } from "../Common/Table";
import "./index.scss";

const Dashboard = () => {
  const statsData = [
    { icon: "monitor", title: "Rendering jobs", value: 14 },
    { icon: "clock", title: "Waiting jobs", value: 14 },
    { icon: "thumbs-up", title: "completed jobs", value: 14 },
    { icon: "alert-triangle", title: "failed jobs", value: 14 },
  ];

  const chartData = [
    {
      name: "JAN 21",
      value: 270,
    },
    {
      name: "JAN 22",
      value: 140,
    },
    {
      name: "JAN 23",
      value: 320,
    },
    {
      name: "JAN 24",
      value: 200,
    },
    {
      name: "JAN 25",
      value: 240,
    },
    {
      name: "JAN 26",
      value: 140,
    },
    {
      name: "JAN 27",
      value: 200,
    },
    {
      name: "JAN 28",
      value: 200,
    },
    {
      name: "JAN 29",
      value: 120,
    },
    {
      name: "JAN 30",
      value: 345,
    },
  ];

  const columns = [
    {
      title: "JOBS",
      dataIndex: "jobs",
      key: "jobs",
    },
    {
      title: "PROJECT ID",
      dataIndex: "projectId",
      key: "pid",
    },
    {
      title: "STAGE",
      dataIndex: "stage",
      key: "stage",
    },
    {
      title: "STORAGE PLACE",
      dataIndex: "storagePlace",
      key: "sp",
    },
    {
      title: "VIEW",
      key: "view",
      render: (record) => (
        <div className="w-[30px] h-[30px] rounded-[50px] bg-[#EDF5FF] flex justify-center items-center">
          <FeatherIcon icon="eye" className="text-[#0171FE] w-[16px]" />
        </div>
      ),
    },
  ];

  const tableData = [
    {
      key: "1",
      jobs: "ID:1005212 - camera-bookeh [L-31]",
      projectId: "Pro_256",
      stage: "Rendering",
      storagePlace: "KD1_00123_DPI_JK001_light assembly_(2158125....)",
    },
    {
      key: "2",
      jobs: "ID:1005212 - camera-bookeh [L-31]",
      projectId: "Pro_256",
      stage: "Rendering",
      storagePlace: "KD1_00123_DPI_JK001_light assembly_(2158125....)",
    },
    {
      key: "3",
      jobs: "ID:1005212 - camera-bookeh [L-31]",
      projectId: "Pro_256",
      stage: "Rendering",
      storagePlace: "KD1_00123_DPI_JK001_light assembly_(2158125....)",
    },
    {
      key: "4",
      jobs: "ID:1005212 - camera-bookeh [L-31]",
      projectId: "Pro_256",
      stage: "Rendering",
      storagePlace: "KD1_00123_DPI_JK001_light assembly_(2158125....)",
    },
  ];
  return (
    <div className="dashboard">
      <div className="main-content-wrapper">
        <div className="flex flex-1 flex-col">
          <h1>Dashboard</h1>
          <div className="container empty-container "></div>

          <div className="flex flex-1 gap-10 py-10">
            <StatsComponent title="Running Jobs" data={statsData} />
            <StatsComponent title="Running Frames" data={statsData} />
          </div>

          <div className="flex gap-10">
            <div className="container flex-4 bg-white p-6">
              <h2 className="text-[24px] font-[600] text-[#011627]">Network</h2>
              <Line
                data={chartData}
                width={740}
                height={340}
                xKey="name"
                dataKey="value"
                min={0}
                max={360}
              />
            </div>
            <div className="flex flex-1">
              <div className="container relative flex flex-col flex-1 p-6">
                <h2 className="text-[24px] font-[600] text-[#011627]">
                  Storage
                </h2>
                <div className="flex flex-1 flex-col justify-center items-center">
                  <div>
                    <SemiCircleProgress
                      percentage={88}
                      background="#E5EAFC"
                      stroke="#01316D"
                      strokeWidth={30}
                      diameter={360}
                    />
                  </div>
                  <div className="absolute bottom-[120px]">
                    <h2 className="text-[42px] text-[#011627] font-[700] text-center">
                      88 GB
                    </h2>
                    <span className="text-[16px] text-[#011627] font-[500] text-center">
                      used out of 100 GB (88%)
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <button className="button-bordered mt-20 flex-1 w-[340px]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-10">
            <div className="container p-6">
              <h2 className="text-[24px] font-[600] text-[#011627]">
                Active Jobs
              </h2>
              <div className="pt-3">
                <DataTable
                  columns={columns}
                  data={tableData}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
