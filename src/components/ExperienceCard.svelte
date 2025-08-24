<script lang="ts">
  import { slide } from "svelte/transition";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let detailsHeight: number;
  $: containerHeight = isOpen ? detailsHeight : 0;

  // let { exp, isOpen} = $props();
  let isOpen: boolean = false;
  export let exp: {
    id: string;
    title: string;
    dates: string;
    teaser: string;
    details: { title: string; text: string }[];
    images: string[];
    tags: string[];
    githubLink: string;
    companyLogo?: string;
  };

  // Tweened store pour animer la largeur
  const containerWidth = tweened(300, { duration: 300, easing: cubicOut });
  // On initialise la largeur en fonction de l'état isOpen
  $: {
    if (isOpen) {
      containerWidth.set(800); // largeur ouverte
    } else {
      containerWidth.set(600); // largeur fermée
    }
  }
</script>

<!-- Quand le bouton est cliqué, on inverse l'état isOpen -->
<button 
  on:click={() => isOpen = !isOpen} style="width: {$containerWidth}px;" 
  class="z-20 rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl"
>
  <div 
    class="group relative rounded-2xl p-6 cursor-pointer bg-gradient-to-br from-white via-blue-50 to-blue-100 
           transition-transform duration-300 ease-out transform
           hover:scale-105 hover:rotate-1 hover:ring-4 hover:ring-blue-400/50"
  >
    <div class="flex items-center justify-between mb-2">
      <div class="flex flex-col items-center flex-1">
        <h3 class="text-3xl font-bold text-gray-900 text-center tracking-tight">{exp.title}</h3>
        <p class="text-sm text-gray-500 text-center">{exp.dates}</p>
      </div>
      <div class="min-h-15 h-full rounded-2xl bg-white flex items-center justify-center shadow-lg ring-2 ring-blue-400 ml-2 group-hover:scale-110 transition-transform duration-300">
        <img src={exp.companyLogo} alt={exp.title} class="max-w-32 h-full object-cover rounded-2xl"/>
      </div>
    </div>
    <p class="text-lg font-semibold text-blue-700 italic mb-4">{@html exp.teaser}</p>
    <div class="details">
      <div class="wrapper" style="height: {containerHeight}px; overflow: hidden; transition: height 0.3s ease">
        {#if isOpen}
          <div bind:clientHeight={detailsHeight} transition:slide={{ duration: 0 }}>
            <div class="mt-6 space-y-8" transition:slide={{ duration: 300, delay: 50 }}>
              {#each exp.details as blk, i}
                <div class="flex flex-col md:flex-row items-center
                            {i % 2 ? 'md:flex-row-reverse' : ''} md:space-x-8">
                  <img src={exp.images[i]} alt={i.toString()}
                      class="w-full md:w-2/5 rounded-xl shadow-lg border border-blue-100" />
                  <div class="w-full md:w-3/5 text-gray-800 mt-4 md:mt-0">
                    <p class="mb-2 font-semibold text-blue-900">{blk.title}</p>
                    <p class="text-gray-700">{@html blk.text}</p>
                  </div>
                </div>
                <div
                  class="w-full h-1 animate-glow"
                  class:bg-gradient-to-r={i % 2 === 0}
                  class:bg-gradient-to-l={i % 2 === 1}
                  style="background-image: linear-gradient(to right, #3b82f6, #fff, #3b82f6);"
                ></div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
    <div class="mt-2 flex flex-wrap items-center justify-between gap-y-2">
      <div class="flex flex-wrap gap-2 mr-4">
        {#each exp.tags as tag}
          <span 
            class="bg-gradient-to-r from-gray-800 via-blue-500 to-blue-800 text-white px-3 py-1 rounded-full text-xs
                   font-medium shadow transition duration-300 hover:bg-blue-900 hover:bg-none hover:scale-120 "
          >{tag}</span>
        {/each}
      </div>
      <a href={exp.githubLink} target="_blank"
         class="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition font-semibold">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.7 1.6 1.8 2.2 1.3.5 2.3.2 2.8 0 .1-.9.4-1.5.8-1.8-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.5 3-.5s2 .2 3 .5c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.4 5.8.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
        </svg>
        <span class="underline">Voir sur GitHub</span>
      </a>
    </div>
  </div>
</button>

<style>
  @keyframes glow {
    0%, 100% { opacity: 0.6; background-position: 0% 50%; }
    50% { opacity: 1; background-position: 100% 50%; }
  }
  .animate-glow {
    background-size: 200% 100%;
    animation: glow 2s ease-in-out infinite;
  }
</style>
