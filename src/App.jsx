import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          position: "relative",
          zIndex: 0,
          background: "#000",
        }}
      >
        <div
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            paddingBottom: "6rem",
          }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div
          style={{
            position: "relative",
            zIndex: 0,
          }}
        >
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
