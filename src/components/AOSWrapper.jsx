import React from "react";

const AOSWrapper = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 1000,
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
    >
      {children}
    </div>
  );
};

export default AOSWrapper;
