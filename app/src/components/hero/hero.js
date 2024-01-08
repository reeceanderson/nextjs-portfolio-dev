import './hero.css';

const Hero = () => {
    return(
      <div className="">
        <h1 className='text-6xl'>reece anderson</h1>
        <h3>information tech & web development</h3>
        <div className="w-6/12 float-left justify-center">
          <h4>studying information technology at kutztown university</h4>
          <div class="scroll flex items-center">
            <svg class="scrollicon" fill="currentColor" viewBox="0 0 24 24"><path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path></svg>
            <a class="hover scroll-button" data-target="about">scroll down</a>
          </div>
        </div>
        <div className="w-6/12 float-right justify-center">
          <h4>web development & design</h4>
        </div>
      </div>
    );
  };

  export { Hero }