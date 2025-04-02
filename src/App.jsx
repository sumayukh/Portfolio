import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { styles } from "./style";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles?.root?.container}>
        <div className={styles?.root?.backgroundContainer}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className={styles?.root?.contactContainer}>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
