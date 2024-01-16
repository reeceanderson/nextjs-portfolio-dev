import './header.css';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Header = () => {

  const underlineVariants = {
    normal: { borderBottom: '2px solid transparent' },
    hover: { borderBottom: '2px solid #000', scale: 1.15 },
  };

  return(
    <div className='flex justify-center'>
      <div className="flex justify-between w-8/12 items-center">
        <svg className='w-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <g id="ra">
            <motion.path class="lines" d="M328.56,332.65H247.77V599.8h69.57V444.63h0L403.27,599.8H498C461.71,542.31,364.11,387.46,328.56,332.65Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeatType: "reverse", repeat: Infinity, duration: 3, repeatDelay: 2, ease: 'easeInOut' }}
            />
            <motion.path class="lines" d="M387.17,294c57.89-.07,71.37,25.34,71.37,56.15,0,26-19.47,47.84-45.82,54l46,64.27c107.35-24.39,123-174.67,43.19-239.22C475,208.46,441.23,202,408.05,200.8c-22.75-1-135.48-.39-160.28-.55l.38,93.78h139"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeatType: "reverse", repeat: Infinity, duration: 3, repeatDelay: 2, ease: 'easeInOut' }}
            />
          </g>
        </svg>
        <ul className='flex object-center'>
            <motion.li className='m-2'
              variants={ underlineVariants }
              initial='normal'
              whileHover='hover'
              transition={{ duration: 0.2 }}
            >
              <a href="index.html">home</a>
            </motion.li>
            <motion.li className='m-2'
              variants={ underlineVariants }
              initial='normal'
              whileHover='hover'
              transition={{ duration: 0.2 }}
            >
              <a href="https://resume.reeceanderson.net" target='_blank'>resume</a>
            </motion.li>
        </ul>
      </div>
    </div>
    
  );
};

export { Header }