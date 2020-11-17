import React from "react";
import Icofont from "react-icofont";
const errorIcon = {
  fontSize: "4rem",
  color: "#e42dfd",
};
const Loading = () => (
  <div className="loading-container">
    <div className="rotate-center">
      <Icofont
        icon="spinner"
        style={errorIcon}
        className="error-icon text-default"
      />
    </div>
  </div>
);

export default Loading;
