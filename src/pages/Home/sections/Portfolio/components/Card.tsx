import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import Projects from './Projects';

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  date,
  description,
  imageUrl,
}) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`
        relative border-4 rounded-xl shadow-lg overflow-hidden m-4
         bg-white border-black
      `}
    >
      <motion.div
        transition={{ duration: 0.5 }}
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
        className="bg-black top-0 left-0 w-full h-full scale-110"
        initial={{ rotateY: 0, opacity: 0 }}
        animate={{
          rotateY: flip ? 0 : 180,
          opacity: flip ? 1 : 0,
          scale: flip ? 2 : 1,
          position: flip ? 'fixed' : 'absolute',
          top: flip ? '0' : 'auto',
          left: flip ? '0' : 'auto',
        }}
        transition={{ duration: 0.7 }}
      >
        {createPortal(
          <AnimatePresence mode="wait">
            {flip && (
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="fixed top-0 left-0 w-full h-full text-white px-2 overflow-y-auto overflow-x-hidden bg-black/90"
              >
                <div className="flex flex-col pt-4">
                  <div className="w-full items-end justify-end flex sticky top-0 bg-black/50 z-10">
                    <motion.button
                      className="cursor-pointer p-4"
                      onClick={() => {
                        setFlip(false);
                      }}
                    >
                      {`\u2716`}
                    </motion.button>
                  </div>
                  <div className="flex justify-center items-center w-full px-2">
                    <div className="max-w-3xl overflow-y-auto">
                      <Projects
                        id={id}
                        description={description}
                        imageUrl={imageUrl}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </motion.div>

      <motion.button
        initial={{ background: 'rgba(0, 0, 0, 0)', opacity: 0 }}
        whileHover={{ background: 'rgba(0, 0, 0, 0.5)', opacity: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-black cursor-pointer"
        onClick={() => {
          setFlip(true);
        }}
      >
        <div className="absolute bottom-0 left-0 w-full text-white p-4 overflow-auto max-h-full">
          <p>{description}</p>
        </div>
      </motion.button>
    </div>
  );
};

export default Card;
