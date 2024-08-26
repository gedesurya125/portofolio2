import { ResponsiveGrid } from 'components/theme';
import React from 'react';

export const Header = () => {
  return (
    <ResponsiveGrid as="header">
      <Headline />
    </ResponsiveGrid>
  );
};

const Headline = (second) => {
  return <h1>Surya A</h1>;
};
