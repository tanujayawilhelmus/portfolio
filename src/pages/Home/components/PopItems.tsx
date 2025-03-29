import { motion } from 'framer-motion';
import { useState } from 'react';
import Pop from 'assets/home/pop.png';

const PopItems = () => {
  const [position] = useState(200);

  return (
    <motion.div
      className="h-screen absolute right-60"
      animate={{ x: position }}
      transition={{ type: 'spring' }}
    >
      <img className="h-full min-w-[520px]" src={Pop} alt="pop-image" />
    </motion.div>
  );
};

export default PopItems;
