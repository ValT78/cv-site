<script>
  import Particles from './Particles.svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  
  const typedName = writable('');
  const animationDone = writable(false);
  const fullName = "./ValentinLantigny        ";
  const scrollThreshold = 400; // Valeur plus grande pour permettre le défilement
  let scrollContainer;
  let fakeScrollHeight = 0;

  onMount(() => {
    // Créer un conteneur de défilement factice
    fakeScrollHeight = scrollThreshold + window.innerHeight;
    scrollContainer.style.height = `${fakeScrollHeight}px`;
    const scrollProgress = Math.min(window.scrollY / scrollThreshold, 1);
    const charsToShow = Math.floor(scrollProgress * fullName.length);
    if (charsToShow >= fullName.length) {
        animationDone.set(true);
        // Réduire le conteneur factice une fois l'animation terminée
        // scrollContainer.style.height = 'auto';
      }

    const handleScroll = () => {
      const scrollProgress = Math.min(window.scrollY / scrollThreshold, 1);
      const charsToShow = Math.floor(scrollProgress * fullName.length);
      
      typedName.set(fullName.substring(0, charsToShow));

      if (charsToShow >= fullName.length) {
        animationDone.set(true);
        // Réduire le conteneur factice une fois l'animation terminée
        // scrollContainer.style.height = 'auto';
      }
      else {
        animationDone.set(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="scroll-container" bind:this={scrollContainer}></div>

<section id="hero" class="relative h-[170vh] flex flex-col items-center justify-center text-white overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#677c8d] to-[#2c344c] opacity-90"></div>
  
  <!-- Particules -->
  <div class="absolute inset-0 z-0">
    <Particles/>
  </div>
  
  <!-- Terminal -->
  <div class="left-1/2 -translate-x-1/2 -translate-y-3/4 w-full fixed flex justify-center pointer-events-none">
    <div class="relative z-20 w-[90%] max-w-2xl mx-auto transition-all duration-500 pointer-events-auto"
         style:opacity={$animationDone ? 0 : 1}
         style:transform={$animationDone ? 'translateY(-50px)' : 'translateY(0)'}>
      <div class="terminal bg-[#1e1e1e] p-6 rounded-lg shadow-2xl">
        <div class="command text-[#4EC9B0] mb-4">
          $ kubectl get pods
        </div>
        <div class="response text-[#DCDCAA]">
          NAME&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;READY&emsp;STATUS&emsp;RESTARTS&emsp;AGE<br>
          scroll-to-load-containers&emsp;1/1&emsp;Running&emsp;0&emsp;&emsp;1d
        </div>
        <div class="typing mt-4 text-[#4EC9B0]">
          $ {$typedName}<span class="cursor-blink">▋</span>
        </div>
      </div>
      <div class="mt-8 text-[#9cccd4] animate-pulse">
        ↓ Scroll pour continuer ↓
      </div>
    </div>
  </div>
  
  <!-- Contenu principal (apparaît après animation) -->
  <div class="relative z-10 w-full max-w-2xl mx-auto mt-auto mb-64 px-4 text-center transition-all duration-1000"
       style:opacity={$animationDone ? 1 : 0}
       style:transform={$animationDone ? 'translateY(0)' : 'translateY(800px)'}>
    {#if $animationDone}
      <div class="animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Valentin Lantigny
        </h1>

        <p class="text-xl md:text-2xl mb-4 text-[#f8b730] font-medium">
          Ingénieur Réseau & DevOps – Développeur passionné
        </p>

        <p class="text-md md:text-lg mb-6 text-[#9cccd4]">
          Spécialisé en infrastructure, automatisation et développement d'outils sur mesure.
          Curieux, pédagogue et toujours prêt à relever des défis.
        </p>

        <div class="flex justify-center gap-4">
          <a href="#projects"
             class="bg-[#f8b730] text-[#2c344c] font-semibold py-3 px-6 rounded-full shadow hover:bg-[#f8c450] transition transform hover:scale-105">
            Voir mes projets
          </a>
          <a href="#contact"
             class="bg-[#677c8d] text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-[#8c6c34] transition transform hover:scale-105">
            Contactez moi
          </a>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .terminal {
    font-family: 'Courier New', monospace;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .cursor-blink {
    animation: blink 1s infinite;
    margin-left: 2px;
  }
  
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
  .scroll-container {
    position: absolute;
    width: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0;
  }
  
</style>