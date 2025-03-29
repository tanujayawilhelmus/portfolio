import Envelope from './components/Envelope';
import Stamp from 'assets/home/stamp.png';
import Nangis from './components/Eye';
import PopItems from './components/PopItems';
import Title from './components/Title';

const Home = () => {
  return (
    <div className="relative h-screen w-screen bg-amber-50 overflow-hidden">
      <Envelope />
      <div className="absolute w-[2000px] h-[2000px] top-[calc(50%-1000px)] left-[70vw]">
        <div className="bg-black w-full h-full rotate-315 overflow-hidden">
          <div className="rotate-[-315deg] w-full h-full">
            <div className="absolute h-screen w-screen bottom-[calc(50%-50vh)] left-[-70vw]">
              <div className="flex h-full justify-end items-center">
                <Nangis />
                <PopItems />
              </div>
            </div>
          </div>
        </div>
        <img
          src={Stamp}
          alt="stamp"
          className="absolute w-40 h-40 top-[calc(50%-80px)] left-[-25%]"
        />
      </div>
      <Title />
    </div>
  );
};

export default Home;
