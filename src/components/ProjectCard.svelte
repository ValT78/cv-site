<!-- src/components/ProjectCard.svelte -->
<script lang="ts">
  export let proj: {
    id: string;
    title: string;
    teaser: string;
    imageUrl: string;
    tags: string[];
    link: string;
    images: string[];
    details: { title: string; text: string }[];
  };

  let isOpen = false;
  const open = () => isOpen = true;
  const close = () => isOpen = false;

  const handleDropdownFocusLoss = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    const currentTarget = event.currentTarget as HTMLElement;
    if (relatedTarget && currentTarget.contains(relatedTarget)) return;
    isOpen = false;
  };

</script>

<div class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mx-auto text-center">
  <div class="relative [perspective:800px] w-full group">
    <div
    class="transition-transform duration-500 group-hover:-translate-y-10 group-hover:-rotate-5 "
      style="box-shadow: 0 8px 24px rgba(140,108,52,0.18); transform: rotateX(6deg) translateY(6px) scale(1.02);"
>
      <!-- facade arrière (arrière) -->
      <div
        class="absolute left-1/2 -translate-x-1/2 -translate-y-12 h-32 w-[calc(100%-1rem)] bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-t-lg shadow-inner origin-bottom"
            ></div>

      <!-- étiquette (dessus) -->
      <div class="absolute left-2 -translate-y-16 w-20 h-32 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-t-lg shadow-inner "></div>
    </div>
    <!-- façade avant avec effet 3D -->
    <button
      class="relative block m-auto bg-yellow-300 border border-yellow-500 shadow-lg rounded-xl overflow-visible focus:outline-none [transform-style:preserve-3d] transition-all duration-500 group-hover:rotate-[-1.5deg] group-hover:scale-105"
      on:click={open} on:focusout={handleDropdownFocusLoss} tabindex="0"
      style="box-shadow: 0 8px 24px rgba(140,108,52,0.18); transform: rotateX(-4deg) translateY(6px) scale(1.02);"
    >

    <!-- Étiquette "Dossier" + icône -->
    <div class="absolute top-3 left-3 flex items-center gap-1 bg-yellow-700/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full shadow-lg z-20">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="inline-block mr-1">
        <path d="M2 6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
      </svg>
    </div>

    <!-- Image en haut (comme une vignette dans le dossier) -->
    <div class="w-full overflow-hidden rounded-t-lg p-6 bg-yellow-200 border-b border-yellow-400 z-20">
      <img src={proj.imageUrl} alt="preview" class="w-full transition-transform duration-300 group-hover:scale-105 rounded shadow" />
    </div>

    <!-- Contenu du projet -->
    <div class="p-5 text-left space-y-2 bg-yellow-100 rounded-b-xl border-t border-yellow-300">
      <h3 class="text-base font-bold text-yellow-900">{proj.title}</h3>
      <p class="text-sm text-yellow-800 line-clamp-3">{@html proj.teaser}</p>

      <div class="flex flex-wrap gap-2 mt-2">
        {#each proj.tags as tag}
          <span class="bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow hover:scale-120 hover:bg-yellow-800 hover:bg-none transition-transform duration-200 cursor-pointer">
            {tag}
          </span>
        {/each}
      </div>
    </div>
    </button>
  </div>
  <span class="text-xs text-gray-400 mt-2 italic">(Cliquer pour ouvrir)</span>
</div>

{#if isOpen}
  <!-- Overlay avec animation d'apparition -->
  <div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 animate-fade-in mt-[10vh]">
    <!-- Fenêtre macOS -->
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-in">
      <!-- Barre de titre macOS -->
      <div class="flex items-center h-8 px-3 bg-gray-100 border-b border-gray-200">
        <div class="flex space-x-2">
          <span class="w-3 h-3 bg-red-500 rounded-full"></span>
          <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <h3 class="flex-1 text-center text-sm font-medium select-none">{proj.title}</h3>
        <button class="text-gray-500 hover:text-gray-800" on:click={close}>✕</button>
      </div>

      <!-- Contenu interne -->
      <div class="p-6 overflow-y-auto max-h-[80vh] space-y-6">
        <div class="flex items-center space-x-4">
          <img src={proj.imageUrl} alt="preview" class="w-16 h-16 object-contain rounded" />
          <p class="italic text-gray-700">{@html proj.teaser}</p>
        </div>

        <div class="flex flex-wrap gap-2">
          {#each proj.tags as tag}
            <span class="bg-[#8c6c34] text-white text-xs px-2 py-1 rounded-full animate-pulse/50 hover:animate-pulse">{tag}</span>
          {/each}
        </div>

        <a href={proj.link} target="_blank" class="underline text-[#8c6c34] hover:text-yellow-700 inline-block transition-colors">
          Voir le site →
        </a>

        <div class="space-y-6">
          {#each proj.details as detail, i}
            <div class="md:flex md:space-x-4 items-start">
              {#if proj.images[i]}
                <img src={proj.images[i]} alt="" class="w-full md:w-1/3 rounded shadow-lg hover:scale-105 transition-transform" />
              {/if}
              <div class="mt-2 md:mt-0">
                <h4 class="font-semibold mb-1">{detail.title}</h4>
                <p class="text-sm text-gray-700">{@html detail.text}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Animations simples (ajoute-les aussi dans tailwind.config.js pour production) */
  @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes scale-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .animate-fade-in { animation: fade-in 0.2s ease-out; }
  .animate-scale-in { animation: scale-in 0.2s ease-out; }
</style>
