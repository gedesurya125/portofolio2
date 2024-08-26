import React from 'react';

export const ResponsiveGrid = ({ children, as: Component = 'div', className = '', ...props }) => {
  return (
    <Component
      {...props}
      className={`${className} mx-auto grid w-container-phone grid-cols-12 gap-2 sm:w-container-tablet-portrait sm:grid-cols-24 md:w-container-tablet-landscape md:grid-cols-24 lg:w-container-desktop lg:grid-cols-24`}
    >
      {children}
    </Component>
  );
};
