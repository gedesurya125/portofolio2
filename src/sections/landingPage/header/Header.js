import { SuryaLogo } from 'components/svgs';
import { ResponsiveGrid } from 'components/theme';
import React from 'react';

export const Header = () => {
  return (
    <ResponsiveGrid as="header">
      <SuryaLogo className="h-auto w-10" />
      <Headline />
    </ResponsiveGrid>
  );
};

const Headline = () => {
  return <h1 className="text-9xl whitespace-nowrap font-heading font-bold italic">Surya A</h1>;
};
