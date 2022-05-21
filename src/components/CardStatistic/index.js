import React from "react";
import PropTypes from "prop-types";

const CardStatistic = ({icon, bgColor, label, value}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
      <div className="card card-statistic-1">
        <div className={`card-icon ${bgColor}`}>
          <i className={`${icon}`} />
        </div>
        <div className="card-wrap">
          <div className="card-header">
            <h4>{label}</h4>
          </div>
          <div className="card-body">{value}</div>
        </div>
      </div>
    </div>
  );
};

CardStatistic.propTypes = {
    icon: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default CardStatistic;
