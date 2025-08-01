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
</script>

<!-- Carte projet façon dossier macOS -->
<!-- Carte projet façon dossier macOS améliorée -->
<div class="flex flex-col items-center w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 mx-auto text-center">
  <button
    class="relative w-full bg-yellow-300 rounded-lg shadow-xl border border-yellow-600 hover:rotate-[-1.5deg] hover:scale-105 transition-transform duration-300"
    on:click={open}
  >
    <!-- Étiquette "Dossier" -->
    <div class="absolute top-1 left-1 bg-yellow-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">Dossier</div>

    <!-- Image en haut -->
    <img src={proj.imageUrl} alt="preview" class="w-full h-40 object-cover rounded-t-lg" />

    <!-- Contenu du projet -->
    <div class="p-3 text-left space-y-1">
      <h3 class="text-sm font-bold text-gray-800">{proj.title}</h3>
      <p class="text-xs text-gray-600 line-clamp-3">{@html proj.teaser}</p>

      <div class="flex flex-wrap gap-1 mt-1">
        {#each proj.tags as tag}
          <span class="bg-white border border-yellow-600 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full">{tag}</span>
        {/each}
      </div>
    </div>
  </button>
  <span class="text-[10px] text-center text-gray-400 mt-1">(Cliquer pour ouvrir)</span>
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
