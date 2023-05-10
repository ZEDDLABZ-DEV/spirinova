import React from "react";
import FeatherIcon from "feather-icons-react";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer justify-end px-14">
      <div className=" w-[100px] flex justify-end items-center text-[12px]">
        <FeatherIcon
          icon="download-cloud"
          className="text-[#76818A] w-[18px]"
        />
        <span className="text-[14px] px-3 font-[500] text-[#011627]">
          700mbps
        </span>
      </div>
      <div className=" w-[120px] flex justify-end items-center text-[12px]">
        <FeatherIcon icon="upload-cloud" className="text-[#76818A] w-[18px]" />
        <span className="text-[14px] px-3 font-[500] text-[#011627]">
          110mbps
        </span>
      </div>
    </div>
  );
};

export { Footer };
