import { useCallback } from 'react';
import Particles from 'react-tsparticles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particleOptions = {
  fullScreen: {
    enable: false,
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: '#fff',
      distance: 250,
      enable: true,
      opacity: 0.7,
      width: 3,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: true,
      speed: 1,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 3000,
      },
      value: 120,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 5, max: 5 },
    },
  },
  detectRetina: true,
};

const HeroParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};

export default HeroParticles;
