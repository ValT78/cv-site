<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  // Technologies logos
  // Import all PNG logos from /src/assets/techno-logo
  // Load logos dynamically from assets folder
  const logos = import.meta.glob('/src/assets/techno-logo/*', { eager: true, as: 'url' });
  const techLogos = Object.values(logos);
  let banners = [
    "Passioné par la manière dont l'être humain apprend",
    "N'a toujours pas fait de choix tranché entre Web, DevOps et Jeu Vidéo",
    "Lui donné un problème à résoudre suffit à le rendre heureux (pas restreint à l'info)",
    "Développe et passe des heures à équilibrer des jeux vidéos"
  ];
  
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

 

  let leftLogos = techLogos.slice(0, Math.ceil(techLogos.length / 2));
  let rightLogos = techLogos.slice(Math.ceil(techLogos.length / 2));
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
    <div class="marquee marquee-up flex flex-col items-center space-y-6 mt-6">
      {#each leftLogos as logo}
        <img src={logo} alt="logo tech" class="w-full h-max-20 opacity-80 hover:opacity-100 transition bg-gradient-to-b from-white via-neutral-100 to-white/90 rounded-xl shadow-lg p-1 hover:scale-110 hover:-rotate-6 hover:shadow-2xl" />
      {/each}
    </div>
  </div>

  <div class="absolute top-4 right-4 h-full w-32 overflow-hidden hidden md:block">
    <div class="marquee marquee-down flex flex-col items-center space-y-6 mt-6 ">
      {#each rightLogos as logo}
        <img src={logo} alt="logo tech" class="w-full h-max-20 opacity-80 hover:opacity-100 transition bg-gradient-to-b from-white via-neutral-100 to-white/90 rounded-xl shadow-lg p-1 hover:scale-110 hover:-rotate-6 hover:shadow-2xl" />
      {/each}
    </div>
  </div>

  <!-- MOBILE STRIP (when side marquees hidden) -->
  <div class="md:hidden fixed bottom-4 left-0 right-0 gap-3 overflow-x-auto px-4 pb-2 z-40 overflow-hidden ">
    <div class="marquee marquee-left flex items-center">
      {#each leftLogos as logo}
        <div class="px-1 flex items-center">
          <img 
            src={logo} 
            alt="logo tech" 
            class="h-16 w-auto max-w-16 bg-gradient-to-b from-white via-neutral-100 to-white/90 rounded-xl shadow-lg p-1 hover:scale-110 hover:-rotate-6 hover:shadow-2xl transition object-contain"
          />
        </div>
      {/each}
    </div>
  </div>
  <div class="md:hidden fixed bottom-24 left-0 right-0 gap-3 overflow-x-auto px-4 pb-2 z-40 overflow-hidden ">
    <div class="marquee marquee-right flex items-center">
      {#each rightLogos as logo}
        <div class="px-1 flex items-center">
          <img 
            src={logo} 
            alt="logo tech" 
            class="h-16 w-auto max-w-16 bg-gradient-to-b from-white via-neutral-100 to-white/90 rounded-xl shadow-lg p-1 hover:scale-110 hover:-rotate-6 hover:shadow-2xl transition object-contain"
          />
        </div>
      {/each}
    </div>
  </div>

  <!-- CONNECTOR CANVAS for desktop (simple svg lines) -->
  <svg class="hidden md:block absolute z-10 pointer-events-none" 
       width="200vw" height="200vh" 
       viewBox="0 0 1920 2160" 
       style="left:-50vw; top:-50vh;" 
       preserveAspectRatio="none">
    <!-- Example lines linking center to where banners will be (positions CSS-driven) -->
    <!-- We'll draw subtle bezier curves, they appear only on large screens -->
    <path d="M960,840 C560,840 320,1040 160,1040" stroke="rgba(255,255,255,0.15)" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M960,840 C1360,840 1600,1040 1760,1040" stroke="rgba(255,255,255,0.15)" stroke-width="2" fill="none" stroke-linecap="round" />
    <path d="M960,1120 C560,1120 320,1320 160,1320" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <path d="M960,1120 C1360,1120 1600,1320 1760,1320" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" fill="none" stroke-linecap="round" />
  </svg>
  <!-- CENTER PROFILE -->
  <section class="relative z-20 flex flex-col items-center text-center px-4 mt-8 space-y-4">
    <!-- halo -->
    <div class="relative group mb-4">
      <div class="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-800 via-sky-400 to-gray-800 opacity-60 blur-2xl animate-pulse z-0"></div>
    <img 
      src="/src/assets/profil.png" 
      alt="profil Valentin Lantigny"
      class="w-48 h-48 rounded-full shadow-lg object-cover border-4 border-blue-400 transform transition duration-700 hover:scale-105 hover:rotate-2 animate-[float_6s_ease-in-out_infinite] z-10 relative"
    />
  </div>

    <h1 class="text-3xl md:text-5xl font-extrabold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-400 to-sky-400 animate-gradient">
      Valentin Lantigny
    </h1>
    <p class="text-md md:text-xl text-blue-400 font-medium my-1">Ingénieur Réseau & DevOps – Développeur passionné</p>
  </section>


  <!-- BANNERS: central column on mobile, two columns on md -->
  <section class="relative z-20 w-full max-w-7xl mt-8 px-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-48 md:mx-28 md:mb-0">
      {#each banners as text, i}
        <article
          class="dev-card relative overflow-hidden rounded-2xl p-5 md:p-6 shadow-xl bg-gradient-to-br from-[#16212b] to-[#1f2b38] transform transition hover:scale-[1.02]"
          style="animation: cardIn .6s ease ${(i * 1)}s both;"
        >
          <!-- Gutter left (like code line numbers) -->
          <div class="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-b from-[#22303b] to-[#18262e] flex flex-col items-center py-3">
            <svg class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 17L3 12L8 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="mt-2 text-[10px] text-slate-400">v{i}.0</div>
          </div>

          <!-- Card content -->
          <div class="ml-6 md:ml-8">
            <div class="flex items-center justify-between">
              <div class="flex items-start gap-3">
                <!-- small icon bubble -->
                <div class="w-9 h-9 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <!-- code bracket icon -->
                  <svg class="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L3 12L9 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 6L21 12L15 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="">
                  <h3 class="text-sm md:text-lg font-semibold text-amber-200 text-left">{text}</h3>
                  <div class="text-amber-200 text-2xl text-left">
                    <span class="cursor-blink">▋</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </article>
      {/each}
    </div>
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


  /* Marquee animations */
  @keyframes scrollUp {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  @keyframes scrollDown {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }
  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee {
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .marquee-up {
    animation-name: scrollUp;
    display: flex;
    flex-direction: column;

  }
  .marquee-down {
    animation-name: scrollDown;
    display: flex;
    flex-direction: column;
  }
  .marquee-right {
    animation-name: scrollRight;
  }
  .marquee-left {
    animation-name: scrollLeft;
  }

  @keyframes float {
  0%, 100% { transform: translateY(0px) rotateY(0deg); }
  50% { transform: translateY(-10px) rotateY(5deg); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 6s ease infinite;
}



@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}


/* marquee keyframes - shift by half of inner height for continuous loop 
   (we duplicated items in markup to make loop seamless)
*/
@keyframes marquee-vert {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}

/* -------------------
   card entrance and floating
   ------------------- */
@keyframes cardIn {
  from { opacity: 0; transform: translateY(12px) scale(.995); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* subtle float for profile image */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%     { transform: translateY(-8px); }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 6s linear infinite;
}
@keyframes gradient { 0% { background-position:0% 50% } 50% { background-position:100% 50% } 100% { background-position:0% 50% } }

/* small responsiveness tweaks */
@media (max-width: 767px) {
  /* hide svg connector on mobile */
  svg.absolute { display: none; }
}

</style>