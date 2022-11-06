import React from "react";

const colorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "24px",
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

export default colorfulMessage;
