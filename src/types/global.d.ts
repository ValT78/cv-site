export {};  // assure que le fichier est traité en tant que module

declare global {
  interface Window {
    particlesInit?: (engine: import("@tsparticles").Engine) => void;
    particlesLoaded?: (container: import("@tsparticles").Container) => void;
  }
}
