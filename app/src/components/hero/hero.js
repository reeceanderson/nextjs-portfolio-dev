import './hero.css';

import { motion } from "framer-motion";

const Hero = () => {
    return(
      <div className='grid justify-center items-center h-96 w-screen'>
        <div className=''>
          <h1 className='text-4xl text-center'>hi, i'm reece anderson</h1>
        </div>
        <br />
        <div className=''>
          <h3 className='text-lg text-center'>an IT student passionate about computing security and systems administration. </h3>
        </div>
      </div>
    );
  };

  export { Hero }