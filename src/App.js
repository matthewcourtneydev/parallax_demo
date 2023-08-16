import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextPage from './components/textPage';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }}  className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
        <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
        <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
        <div className="animation_layer parallax" id="logo_land"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
        <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
        <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
        <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.20}>
        <div className="animation_layer parallax" id="mountain_man"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
        <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
        <TextPage />
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default App;
