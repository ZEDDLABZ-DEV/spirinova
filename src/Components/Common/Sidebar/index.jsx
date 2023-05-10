import React from "react";
import FeatherIcon from "feather-icons-react";
import { sidebarData } from "./Sidebar-data";
import "./index.scss";
import { redirect } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-header"></div>
        <div className="sidebar-menu">
          <ul className="menu-list">
            {Object.entries(sidebarData[0]).map((item) => {
              return (
                <>
                  {item[1].map((menuItem) => (
                    <li
                      key={menuItem.key}
                      className={menuItem.active ? "active" : "default"}
                      onClick={() => redirect(menuItem.link)}
                    >
                      <FeatherIcon
                        size="18"
                        className="icon"
                        icon={menuItem.icon}
                      />
                      <span>{menuItem.title}</span>
                    </li>
                  ))}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
