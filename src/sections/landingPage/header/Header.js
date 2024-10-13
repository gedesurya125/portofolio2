import clsx from 'clsx';
import { Logo } from 'components/svgs';
import { ResponsiveGrid } from 'components/theme';
import { cn } from 'components/theme/utils/cn';
import React from 'react';

export const Header = () => {
  return (
    <div className={clsx('lg:flex lg:h-screen lg:items-center')}>
      <ResponsiveGrid as="header" className={clsx('')}>
        <HeaderLogo />
        <Spacer />
        <Decoration />
        <Headline />
      </ResponsiveGrid>
    </div>
  );
};

const HeaderLogo = () => {
  return (
    <Logo
      className={cn(
        'col-start-3 col-end-11 mt-10 h-auto w-full self-center',
        'lg:col-start-2 lg:col-end-8 lg:w-full',
      )}
    />
  );
};

const Decoration = () => {
  return (
    <div
      className={clsx(
        '__decoration',
        'relative col-start-1 flex h-60 items-center self-center',
        'lg:h96 lg:col-start-9 lg:col-end-12 lg:justify-self-center',
      )}
    >
      <div className={clsx('__primary-bar', 'relative bottom-[25%] h-full w-10 bg-primary')}></div>
      <div className={clsx('__secondary-bar', 'relative top-[25%] h-full w-10 bg-secondary')}></div>
    </div>
  );
};

const Headline = () => {
  return (
    <div
      className={clsx(
        'col-start-2 col-end-13 ml-10',
        'lg:col-start-12 lg:col-end-24 lg:self-center',
      )}
    >
      <span className={clsx('font-body text-[3rem] leading-tight', 'lg:text-[3.1rem]')}>
        Hello my name is Surya.
      </span>
      <h1 className={clsx('mt-10 font-heading text-[4rem] leading-tight', 'lg:text-[7rem]')}>
        I make <span className={clsx('text-secondary')}>websites</span>
      </h1>
      <p className={clsx('font-body', 'lg:text-[3rem]')}>
        I’m a front-end developer
        <br /> and website designer
      </p>
    </div>
  );
};

const Spacer = () => {
  return <div className={cn('col-span-12 h-32')}></div>;
};
