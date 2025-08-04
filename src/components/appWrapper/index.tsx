import "./styles.css";
import React from "react";

const AppWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="container">
      <div className="screen">{children}</div>
    </div>
  );
};

export default React.memo(AppWrapper);
