import { ResponsiveGrid } from 'components/theme';

export default async function Home() {
  return (
    <main>
      <h1 className="ml-10 mt-10 font-heading text-lg text-white">
        Welcome to the Surya`s Next JS Tailwinds starter
      </h1>

      <OutsideGridComponent />
      <InsideGridComponent />
    </main>
  );
}

const OutsideGridComponent = () => {
  return (
    <div className="__outside-grid-component mt-20">
      <div className="box h-card-lg w-card-lg bg-slate-200" />
      <p className="mt-2 font-body text-white">This is outside grid component</p>
    </div>
  );
};

const InsideGridComponent = () => {
  return (
    <ResponsiveGrid className="mt-20">
      <div className="col-start-1 col-end-6 h-[3rem] bg-white" />
      <p className="col-start-1 col-end-25 mt-2 font-body text-white">
        This is inside grid component with col-start-1 and col-end-6
      </p>
    </ResponsiveGrid>
  );
};
