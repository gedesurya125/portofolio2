import { ResponsiveGrid } from 'components/theme';
import { Header } from 'sections/landingPage/header/Header';

export default async function Home() {
  return (
    <main>
      <Header />

      <OutsideGridComponent />
      <InsideGridComponent />
    </main>
  );
}

const OutsideGridComponent = () => {
  return (
    <div className="__outside-grid-component mt-20">
      <div className="box h-card-lg w-card-lg bg-slate-200" />
      <p className="mt-2 font-body">This is outside grid component</p>
    </div>
  );
};

const InsideGridComponent = () => {
  return (
    <ResponsiveGrid className="mt-20">
      <div className="col-start-1 col-end-6 h-[3rem] bg-white" />
      <p className="col-start-1 col-end-12 mt-2 font-body">
        This is inside grid component with col-start-1 and col-end-6
      </p>
    </ResponsiveGrid>
  );
};
