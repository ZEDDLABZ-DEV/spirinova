import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import Switch from "react-switch";
import "./index.scss";

const Toolbar = () => {
  const [switchState, setSwitchState] = useState(true);

  const handleSwitch = (e) => {
    setSwitchState(e);
  };

  return (
    <div className="container px-10 flex justify-between items-center">
      <div className="py-5 flex h-[70px] flex-row gap-10 items-center">
        <FeatherIcon icon="upload" className="toolbar-icon" />
        <FeatherIcon
          icon="download"
          className="toolbar-icon toolbar-icon-disabled"
        />
        <FeatherIcon icon="folder-plus" className="toolbar-icon" />
        <FeatherIcon icon="copy" className="toolbar-icon" />
        <FeatherIcon icon="hash" className="toolbar-icon" />
        <FeatherIcon icon="trash" className="toolbar-icon" />
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[50px] bg-[#EDF5FF]">
          <FeatherIcon
            icon="edit-3"
            className="toolbar-icon toolbar-icon-active"
          />
        </div>
        <FeatherIcon icon="refresh-cw" className="toolbar-icon" />
      </div>

      <div className="flex">
        <Switch
          checked={switchState}
          checkedIcon={
            <span
              style={{
                position: "absolute",
                color: "#fff",
                padding: "8px 10px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Manual
            </span>
          }
          uncheckedIcon={
            <span
              style={{
                position: "absolute",
                color: "#011627",
                padding: "8px 10px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {" "}
              Auto
            </span>
          }
          onColor="#0171FE"
          offColor="#EBECEE"
          width={100}
          height={38}
          handleDiameter={28}
          borderRadius="100px"
          onChange={handleSwitch}
        />
      </div>
    </div>
  );
};

export default Toolbar;
