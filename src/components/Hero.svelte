<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  // Technologies logos
  // Import all PNG logos from /src/assets/techno-logo
  // Load logos dynamically from assets folder
  const logos = import.meta.glob('/src/assets/techno-logo/*.png', { eager: true, as: 'url' });
  const techLogos = Object.values(logos);
  let banners = [
    'Infrastructure as Code Enthusiast',
    'Automatisation & CI/CD Expert',
    'Observabilité & Monitoring Advocate',
    "Passionné par l'IA & ML Ops"
  ];


  // Parallax action
  function parallax(node, speed = 0.3) {
    const handle = () => {
      const y = window.scrollY;
      node.style.transform = `translateY(${y * speed}px)`;
    };
    window.addEventListener('scroll', handle);
    return { destroy: () => window.removeEventListener('scroll', handle) };
  }

  
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

<section id="hero" class="relative h-[260vh] flex flex-col justify-center text-white overflow-hidden">
  <!-- Background -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-800 to-blue-800 opacity-90"></div>

  <!-- Particules -->
  
  
  <!-- Terminal -->
  <div class="w-full fixed flex pointer-events-none top-0 mt-[40vh] z-20">
    <div class="relative z-20 w-[90%] mx-auto transition-all duration-500 pointer-events-auto"
         style:opacity={$animationDone ? 0 : 1}
         style:transform={$animationDone ? 'translateY(-800px)' : 'translateY(0)'}>
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
<div class="relative z-20 w-full mx-auto mt-auto px-4 text-center transition-all duration-1000"
       style:opacity={$animationDone ? 1 : 0}
       style:transform={$animationDone ? 'translateY(0)' : 'translateY(1000px)'}>
    {#if $animationDone}
      <main class="relative overflow-hidden mt-64 min-h-screen bg-[#1e1e2e] text-white flex flex-col items-center p-6 rounded-4xl">
  <!-- Side scrolling logos -->
  <div class="absolute top-4 left-4 h-full w-32 overflow-hidden hidden md:block">
    <div class="marquee marquee-left flex flex-col items-center space-y-6 mt-6">
      {#each techLogos.slice(0, Math.ceil(techLogos.length / 2)) as logo}
        <img src={logo} alt="logo tech" class="w-full h-max-20 opacity-80 hover:opacity-100 transition" />
      {/each}
    </div>
  </div>

  <div class="absolute top-4 right-4 h-full w-32 overflow-hidden hidden md:block">
    <div class="marquee marquee-right flex flex-col items-center space-y-6 mt-6">
      {#each techLogos.slice(Math.ceil(techLogos.length / 2)) as logo}
        <img src={logo} alt="logo tech" class="w-full h-max-20 opacity-80 hover:opacity-100 transition" />
      {/each}
    </div>
  </div>

  <!-- Profile Section -->
  <section class="z-10 flex flex-col items-center text-center animate-fade-in">
    <img src="/src/assets/profil.png" alt="profil Valentin Lantigny"
      class="w-32 h-32 rounded-full shadow-lg mb-4 object-cover border-4 border-amber-400" />
    <h1 class="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-2">
      Valentin Lantigny
    </h1>
    <p class="text-lg md:text-2xl text-amber-400 font-medium mb-6">
      Ingénieur Réseau & DevOps – Développeur passionné
    </p>
  </section>

  <!-- Banner Section -->
  <section class="z-10 gap-4 w-full mt-8">
    {#each banners as text, i}
      <div class="banner relative overflow-hidden p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#2c344c] to-[#3b455c] hover:from-[#3b455c] hover:to-[#2c344c] transition transform hover:-translate-y-1 mx-40">
        <p class="text-md md:text-lg font-semibold text-center">
          {text}
        </p>
      </div>
    {/each}
  </section>
</main>
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
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity:1; transform: translateY(0);} }
  .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }


  /* Marquee animations */
  @keyframes scrollUp {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scrollDown {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
  .marquee {
    display: flex;
    flex-direction: column;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .marquee-left {
    animation-name: scrollUp;
  }
  .marquee-right {
    animation-name: scrollDown;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .banner p {
      font-size: 0.9rem;
    }
  }
</style>