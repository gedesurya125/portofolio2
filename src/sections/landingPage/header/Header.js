import { Logo, SuryaLogo } from 'components/svgs';
import { ResponsiveGrid } from 'components/theme';
import React from 'react';

export const Header = () => {
  return (
    <ResponsiveGrid as="header">
      <HeaderLogo />
      <Headline />
    </ResponsiveGrid>
  );
};

const HeaderLogo = () => {
  return <Logo className="h-auto w-full" />;
};

const Headline = () => {
  return <h1 className="font-heading text-9xl">I make websites</h1>;
};
