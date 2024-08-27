import { ResponsiveGrid } from 'components/theme';
import React from 'react';

export const Header = () => {
  return (
    <ResponsiveGrid as="header">
      <Headline />
    </ResponsiveGrid>
  );
};

const Headline = () => {
  return <h1 className="font-heading text-lg font-bold italic">Surya A</h1>;
};
