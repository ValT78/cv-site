<script lang="ts">
     import { onMount } from 'svelte';
  import { particlesInit } from '@tsparticles/svelte';
  import { loadSlim } from '@tsparticles/slim';
    import Particles from '@tsparticles/svelte';

  const options = {
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: {
          enable: true
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#f8b730",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none" as const,
        outModes: {
          default: "bounce" as const
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 100
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 4 }
      }
    },
    detectRetina: true
  };
  void particlesInit(async (engine) => {
    await loadSlim(engine);
  });
</script>

<Particles id="tsparticles" options={options} />