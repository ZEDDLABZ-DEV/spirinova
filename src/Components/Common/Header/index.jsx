import React from "react";
import FeatherIcon from "feather-icons-react";
import avatar from "../../../Assets/images/avatar.png";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-title">
          <h3>CPU Region 11 (16-cores) Normal</h3> &nbsp;
          <FeatherIcon icon="chevron-down" className="header-toolbar-icon" />
        </div>

        <div className="header-toolbar">
          <div>
            <FeatherIcon
              icon="gift"
              style={{ color: "#FD6B22" }}
              className="header-toolbar-icon"
            />
          </div>
          <div>
            <FeatherIcon icon="bell" className="header-toolbar-icon" />
          </div>
          <div className="flex space-x-2">
            <FeatherIcon
              icon="download-cloud"
              className="header-toolbar-icon"
            />
            &nbsp; Client Download
          </div>

          <div className="flex items-center header-profile-toolbar">
            <img src={avatar} alt="user-profile" />
            &nbsp; Daren Joe &nbsp;
            <FeatherIcon icon="chevron-down" className="header-toolbar-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
