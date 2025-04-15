import { useState } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, date, description, imageUrl }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className={`
        relative border-4 rounded-xl shadow-lg overflow-hidden m-4
         bg-white border-black
      `}
    >
      <motion.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: flip ? 180 : 0 }}
      >
        <img src={imageUrl} alt={title} className="scale-105 w-full" />
        <div className="absolute top-0 left-0 bg-black text-white rounded-br-md p-1 pb-1.5 border border-black">
          <p
            style={{
              fontFamily: 'verdana',
            }}
            className="text-xs"
          >
            {title}
          </p>
          <p
            style={{
              fontFamily: 'verdana',
            }}
            className="font-verdana text-xs"
          >
            {date}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="absolute bg-black top-0 left-0 w-full h-full scale-110"
        initial={{ rotateY: 0, opacity: 0 }}
        animate={{ rotateY: flip ? 0 : 180, opacity: flip ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {flip &&
          createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
              }}
              className="fixed top-0 left-0 w-full h-full text-white p-4 overflow-auto"
            >
              <div className="flex flex-col">
                <div className="w-full items-end justify-end flex">
                  <motion.button
                    className="cursor-pointer p-4"
                    onClick={() => setFlip(false)}
                  >
                    {`\u2716`}
                  </motion.button>
                </div>
                <div className="flex justify-center">
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </motion.div>,
            document.body
          )}
      </motion.div>

      <motion.button
        initial={{ background: 'rgba(0, 0, 0, 0)', opacity: 0 }}
        whileHover={{ background: 'rgba(0, 0, 0, 0.5)', opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer"
        onClick={() => setFlip((draft) => !draft)}
      >
        <div className="absolute bottom-0 left-0 w-full text-white p-4 overflow-auto max-h-full">
          <p>{description}</p>
        </div>
      </motion.button>
    </div>
  );
};

export default Card;
