import About from './sections/About';
import Landing from './sections/Landing';

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory">
      <Landing />
      <About />
    </div>
  );
};

export default Home;
