import { Logo } from './logo.js';

const Header = () => {
  return(
    <div className='flex justify-center'>
      <div className="flex justify-between w-8/12 items-center">
        <Logo />
        <ul className='flex object-center'>
            <li className='m-2'><a class="hover scroll-button" href="index.html">home</a></li>
            <li className='m-2'><a class="hover scroll-button" data-target="work">work</a></li>
            <li className='m-2'><a class="hover scroll-button" data-target="contact">contact</a></li>
            <li className='m-2'><a class="hover scroll-button" href="https://resume.reeceanderson.net" target="_blank">resume</a></li>
        </ul>
      </div>
    </div>
    
  );
};

export { Header }