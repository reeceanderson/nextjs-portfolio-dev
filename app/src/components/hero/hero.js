import './hero.css';

import { motion } from "framer-motion";

const Hero = () => {
    return(
      <div className='hero flex justify-center items-center h-96 w-screen'>
        <div className='flex justify-center items-center'>
          <h1 className='text-4xl text-center'>hi, i'm reece anderson</h1>
          { /*<img src='https://avatars.githubusercontent.com/u/55410535?s=400&u=7117faa8bf5c513082e64bf696e1c33dd921b1d9&v=4'></img>*/ }
        </div>
        <br />
        <div className=''>
          <h3 className='text-lg text-center italic'>IT student passionate about computing security and systems administration. </h3>
        </div>
      </div>
    );
  };

  export { Hero }