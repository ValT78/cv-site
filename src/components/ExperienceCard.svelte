<script lang="ts">
  import { slide } from "svelte/transition";


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

  isOpen = true;

  // Fonction pour gérer le toggle
  function toggle() {
    isOpen = !isOpen;
    console.log('Toggle experience:', exp.title, isOpen);
    // Émettre un événement pour notifier le parent
  }

</script>

<button 
  onclick={() => toggle()}
  class="group relative bg-white rounded-lg shadow-lg p-6 cursor-pointer
         transition-transform duration-300 ease-out transform
         hover:scale-105 hover:rotate-1 hover:ring-4 hover:ring-[#f8b730]/50"
>
  <h3 class="text-2xl font-semibold text-[#2c344c] mb-2">{exp.title}</h3>
  <p class="text-sm text-gray-600 mb-4">{exp.dates}</p>
  <p class="text-[#677c8d] italic mb-4">{exp.teaser}</p>

  {#if isOpen}
    <div 
      class="mt-6 space-y-6"
      transition:slide={{ duration: 300, delay: 50 }}
    >
      {#each exp.details as blk, i}
        <div class="flex flex-col md:flex-row items-center
                    {i % 2 ? 'md:flex-row-reverse' : ''} md:space-x-8">
          <img src={exp.images[i]} alt=""
               class="w-full md:w-2/5 rounded-lg shadow-lg" />
          <div class="w-full md:w-3/5 text-[#2c344c] mt-4 md:mt-0">
            <p class="mb-2 font-semibold">{blk.title}</p>
            <p>{@html blk.text}</p>
          </div>
        </div>

        <div
          class="w-full h-1 animate-glow from-[#f8b730] via-white to-[#f8b730]"
          class:bg-gradient-to-r={i % 2 === 0}
          class:bg-gradient-to-l={i % 2 === 1}
        ></div>
      {/each}
      </div>
  {/if}


  <div class="mt-4 flex flex-wrap items-center justify-between">
    <div class="flex flex-wrap gap-2">
      {#each exp.tags as tag}
        <span 
          class="bg-[#8c6c34] text-white px-3 py-1 rounded-full text-xs
                 font-medium shadow hover:bg-[#677c8d] transition"
        >{tag}</span>
      {/each}
    </div>
    <a href={exp.githubLink} target="_blank"
       class="flex items-center gap-2 text-[#2c344c] hover:text-[#8c6c34] transition">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.7 1.6 1.8 2.2 1.3.5 2.3.2 2.8 0 .1-.9.4-1.5.8-1.8-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.5 3-.5s2 .2 3 .5c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.4 5.8.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
      </svg>
      <span class="underline">Voir sur GitHub</span>
    </a>
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
