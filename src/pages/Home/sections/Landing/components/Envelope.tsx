import Texture from 'assets/home/texture.jpg';

const Envelope = () => {
  return (
    <div
      className="absolute h-full w-full bg-contain"
      style={{ backgroundImage: `url(${Texture})` }}
    ></div>
  );
};

export default Envelope;
