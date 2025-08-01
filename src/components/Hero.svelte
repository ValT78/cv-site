<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  
  const typedName = writable('');
  const animationDone = writable(true);
  const fullName = "./ValentinLantigny        ";
  let scrollLocked = false;
  let scrollY = 0;

  let lastY = 0;

  function disableScroll() {
    const x = window.scrollX;
    window.onscroll = () => window.scrollTo(x, lastY);
    scrollLocked = true;
  }
  
  function enableScroll() {
    window.onscroll = null;
    scrollLocked = false;
    console.log("Scroll enabled");
  }

  onMount(() => {
    const threshold = window.innerHeight * 1.2;

    if (scrollY > threshold) {
      animationDone.set(true);
      typedName.set(fullName);
    }
    else {
      animationDone.set(false);
      typedName.set('');
    }


    const handle = () => {
      if (scrollLocked) return;
      const y = scrollY;
      lastY = y;
      if (!$animationDone) {
        const prog = Math.min(y / threshold, 1);
        const chars = Math.floor(prog * fullName.length);
        typedName.set(fullName.substring(0, chars));

        if (chars >= fullName.length) {
          animationDone.set(true);
          disableScroll();
          setTimeout(enableScroll, 1000);
        }
      }
      else if (y < threshold) {
        animationDone.set(false);const prog = Math.min(y / threshold, 1);
        const chars = Math.floor(prog * fullName.length);
        typedName.set(fullName.substring(0, chars));
      }
    };

    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  });
</script>

<svelte:window bind:scrollY={scrollY} />

<section id="hero" class="relative h-[240vh] flex flex-col justify-center text-white overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-blue-800 opacity-90"></div>

  <!-- Particules -->
  
  
  <!-- Terminal -->
  <div class="w-full fixed flex pointer-events-none top-0 mt-[40vh] z-20">
    <div class="relative z-20 w-[90%] mx-auto transition-all duration-500 pointer-events-auto"
         style:opacity={$animationDone ? 0 : 1}
         style:transform={$animationDone ? 'translateY(-50px)' : 'translateY(0)'}>
      <div class="terminal bg-[#1e1e1e] p-6 rounded-lg shadow-2xl">
        <div class="text-blue-400 mb-4 text-3xl">
          $ kubectl get pods
        </div>
        <div class="text-3xl">
          <span class="text-red-800">Network Error: </span><span class="ml-2 "> scroll more to continue...</span>
        </div>
        <div class="mt-4 text-blue-400 text-3xl">
          $ {$typedName}<span class="cursor-blink">▋</span>
        </div>
      </div>
      <div class="mt-8 text-[#9cccd4] animate-pulse">
        ↓ Scroll pour continuer ↓
      </div>
    </div>
  </div>
  
  <!-- Contenu principal (apparaît après animation) -->
  <div class="relative z-20 w-full mx-auto mt-auto mb-64 px-4 text-center transition-all duration-1000"
       style:opacity={$animationDone ? 1 : 0}
       style:transform={$animationDone ? 'translateY(0)' : 'translateY(1000px)'}>
    {#if $animationDone}
      <div class="animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Valentin Lantigny
        </h1>

        <p class="text-xl md:text-2xl mb-4 text-amber-400 font-medium">
          Ingénieur Réseau & DevOps – Développeur passionné
        </p>

        <p class="text-md md:text-lg mb-6 text-[#9cccd4]">
          Spécialisé en infrastructure, automatisation et développement d'outils sur mesure.
          Curieux, pédagogue et toujours prêt à relever des défis.
        </p>

        <div class="flex justify-center gap-4">
          <a href="#projects"
             class="bg-amber-400 text-[#2c344c] font-semibold py-3 px-6 rounded-full shadow hover:bg-[#f8c450] transition transform hover:scale-105">
            Voir mes projets
          </a>
          <a href="#contact"
             class="bg-[#2B464E] text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-[#8c6c34] transition transform hover:scale-105">
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
  
</style>