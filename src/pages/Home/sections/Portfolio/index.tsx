import Card from './components/Card';
import { portfolios } from './constants';

const Portfolio = () => {
  return (
    <section className="relative h-dvh w-dvw bg-amber-50 snap-start pt-12">
      <div className="w-full px-20 py-4 text-center">
        <h2 className="text-5xl">Past Projects</h2>
      </div>
      <div className="h-[calc(100%-6rem)] w-full overflow-y-auto inset-shadow-2xs">
        <div className="columns-1 sm:columns-2 md:columns-3 pt-10 pb-60 px-4 md:px-20">
          {portfolios.map((portfolio) => (
            <Card
              id={portfolio.id || 0}
              key={portfolio.title}
              title={portfolio.title}
              date={portfolio.date}
              description={portfolio.description}
              imageUrl={portfolio.imageUrl}
            />
          ))}
        </div>
        <div className=" text-white text-right relative">
          <div className="absolute bottom-0 w-full bg-gray-800 p-10 pb-20">
            <p
              className="text-sm"
              style={{
                fontFamily: 'verdana',
              }}
            >
              Email:{' '}
              <a
                href="mailto:tanujayapriscila02@gmail.com"
                style={{
                  fontFamily: 'verdana',
                }}
              >
                tanujayapriscila02@gmail.com
              </a>
            </p>
            <p
              style={{
                fontFamily: 'verdana',
              }}
              className="text-sm"
            >
              Phone number: +65 8223 673 371
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
