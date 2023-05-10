import React from "react";
import FeatherIcon from "feather-icons-react";
import "./index.scss";

const Analytics = (props) => {
  const {
    title,
    value,
    icon,
    cls,
    trend,
    trendValue,
    compareString,
    showFooter,
  } = props;

  return (
    <div className={`analytics ${cls}`}>
      <div className="analytic-main">
        <span>
          <b>{title}</b>
          <h2>
            <FeatherIcon className="icon" size={24} icon={icon} /> {value}
          </h2>
        </span>
      </div>
      <div
        className="analytic-footer"
        style={{
          visibility:
            showFooter || trendValue !== undefined ? "visible" : "hidden",
        }}
      >
        <span>
          <span> {compareString} </span>
          <b className={trend}>
            <FeatherIcon
              className="icon"
              size={18}
              icon={trend === "positive" ? "arrow-up" : "arrow-down"}
            />{" "}
            &nbsp; {trend === "positive" ? "+" : "-"}
            {trendValue}
          </b>
        </span>
      </div>
    </div>
  );
};

export { Analytics };
