// Framer Motion Import
import { motion } from "framer-motion";

import './App.css';

// Import Components
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';

// Body Components


function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}

export default App;
