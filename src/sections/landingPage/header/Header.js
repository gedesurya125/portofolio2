import { SuryaLogo } from 'components/svgs';
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
  return <h1 className="whitespace-nowrap font-heading text-9xl">I make websites</h1>;
};
