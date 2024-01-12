import './hero.css';

import { motion } from "framer-motion";

const Hero = () => {
    return(
      <div className='flex justify-center items-center h-96'>
        <motion.h1 className='text-5xl'
          whileHover={{ scale: 1.9 }}
          transition={{ duration: 0.5 }}
        >Hero</motion.h1>
      </div>
    );
  };

  export { Hero }