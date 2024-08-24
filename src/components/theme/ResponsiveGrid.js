import React from "react";

export const ResponsiveGrid = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`${className} 
        grid
        grid-cols-12
        sm:grid-cols-24
        md:grid-cols-24
        lg:grid-cols-24
        gap-2
        w-container-phone 
        sm:w-container-tablet-portrait 
        md:w-container-tablet-landscape 
        lg:w-container-desktop 
        mx-auto
    `}
    >
      {children}
    </div>
  );
};
