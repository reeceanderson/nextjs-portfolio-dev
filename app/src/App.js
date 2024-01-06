// Framer Motion Import
import { motion } from "framer-motion";

import './App.css';

// Import Components
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

// Body Components
const Hero = () => {
  return(
    <div>
      <h1>reece anderson</h1>
      <h3>information tech & web development</h3>
      <div class="splitter">
        <h4>studying information technology at kutztown university</h4>
        <div class="scroll">
          <svg class="" fill="currentColor" viewBox="0 0 24 24"><path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path></svg>
          <a class="hover scroll-button" data-target="about">scroll down</a>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
}

export default App;
