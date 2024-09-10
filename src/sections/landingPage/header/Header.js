import clsx from 'clsx';
import { Logo, SuryaLogo } from 'components/svgs';
import { ResponsiveGrid } from 'components/theme';
import React from 'react';

export const Header = () => {
  return (
    <div className={clsx('lg:flex lg:h-screen lg:items-center')}>
      <ResponsiveGrid as="header" className={clsx('')}>
        <HeaderLogo />
        <Headline />
      </ResponsiveGrid>
    </div>
  );
};

const HeaderLogo = () => {
  return <Logo className={clsx('md:w-10', 'col-end-8 lg:col-start-2 lg:w-full')} />;
};

const Headline = () => {
  return (
    <div className={clsx('lg:col-start-12 lg:col-end-24 lg:self-center')}>
      <span className={clsx('font-body', 'lg:text-[3.1rem]')}>Hello my name is Surya.</span>
      <h1 className={clsx('font-heading', 'lg:text-[7rem]')}>
        I make <span className={clsx('text-secondary')}>websites</span>
      </h1>
      <p className={clsx('font-body', 'lg:text-[3rem]')}>
        I’m a front-end developer
        <br /> and website designer
      </p>
    </div>
  );
};
