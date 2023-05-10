import React from "react";
import FeatherIcon from "feather-icons-react";

const StatsComponent = (props) => {
  const { title, data } = props;

  return (
    <div className="container stats-component flex-1 bg-white p-6">
      <div className="flex justify-between">
        <h2 className="text-[18px] font-[600] text-[#011627]">{title}</h2>
        <span className="text-[14px] font-[500] text-[#011627]">
          {" "}
          This week
        </span>
      </div>

      <div className="p-2">
        <div className="flex flex-row border-b-2">
          <div className="flex flex-1 border-r-2 py-4 justify-center">
            <div>
              <div className="bg-[#EDF5FF] h-[54px] w-[54px] flex items-center justify-center rounded-[50px]">
                <FeatherIcon
                  icon={data[0]?.icon}
                  className=" text-[rgb(1,49,109)] text-[14px]"
                />
              </div>
            </div>
            <div className="flex flex-col px-2">
              <span className="text-[#949DA4] text-[14px] uppercase">
                {data[0].title}
              </span>
              <span className="text-[22px] text-[#011627] font-[600]">
                {data[0].value}
              </span>
            </div>
          </div>
          <div className="flex flex-1 py-4 justify-center">
            <div>
              <div className="bg-[#EDF5FF] h-[54px] w-[54px] flex items-center justify-center rounded-[50px]">
                <FeatherIcon
                  icon={data[1]?.icon}
                  className=" text-[#01316D] text-[14px]"
                />
              </div>
            </div>
            <div className="flex flex-col px-2">
              <span className="text-[#949DA4] text-[14px] uppercase">
                {data[1].title}
              </span>
              <span className="text-[22px] text-[#011627] font-[600]">
                {data[1].value}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-1 border-r-2 py-4 justify-center">
            <div>
              <div className="bg-[#EDF5FF] h-[54px] w-[54px] flex items-center justify-center rounded-[50px]">
                <FeatherIcon
                  icon={data[2].icon}
                  className=" text-[#01316D] text-[14px]"
                />
              </div>
            </div>
            <div className="flex flex-col px-2">
              <span className="text-[#949DA4] text-[14px] uppercase">
                {data[2].title}
              </span>
              <span className="text-[22px] text-[#011627] font-[600]">
                {data[2].value}
              </span>
            </div>
          </div>
          <div className="flex flex-1 py-4 justify-center">
            <div>
              <div className="bg-[#EDF5FF] h-[54px] w-[54px] flex items-center justify-center rounded-[50px]">
                <FeatherIcon
                  icon={data[3].icon}
                  className=" text-[#01316D] text-[14px]"
                />
              </div>
            </div>
            <div className="flex flex-col px-2">
              <span className="text-[#949DA4] text-[14px] uppercase">
                {data[3].title}
              </span>
              <span className="text-[22px] text-[#011627] font-[600]">
                {data[3].value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StatsComponent };
