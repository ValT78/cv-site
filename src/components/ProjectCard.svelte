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

<div class="flex flex-col items-center max-w-110 w-3/4 lg:w-2/5 xl:w-2/7 p-4 mx-auto text-center mt-5">
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
      class="relative block w-full m-auto bg-yellow-300 border border-yellow-500 shadow-lg rounded-xl overflow-visible focus:outline-none [transform-style:preserve-3d] transition-all duration-500 group-hover:rotate-[-1.5deg] group-hover:scale-105"
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
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 bg-black/50 z-40 flex items-start justify-center p-4 backdrop-blur-sm animate-fade-in mt-[11vh]"
    on:click|self={close}
  >
    <div
      class="relative bg-yellow-50 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-up"
      style="border:2px solid rgba(140,108,52,0.3);"
    >
      <!-- barre titre macOS customisée -->
      <div class="flex items-center h-8 px-4 bg-gradient-to-r from-yellow-200 to-yellow-300 border-b border-yellow-400">
        <div class="flex space-x-2">
          <span class="w-3 h-3 bg-red-500 rounded-full"></span>
          <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <h3 class="flex-1 text-center text-sm font-semibold text-yellow-900 select-none truncate">{proj.title}</h3>
        <button
          class="text-yellow-800 hover:text-yellow-900 transition-colors"
          on:click={close}
        >
          ✕
        </button>
      </div>

      <!-- contenu interne avec scrollbar custom -->
      <div class="p-6 overflow-y-auto max-h-[80vh] space-y-6 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-yellow-100">
        <!-- aperçu -->
        <div class="flex items-center space-x-4">
          <img src={proj.imageUrl} alt="preview" class="w-20 h-20 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
          <p class="italic text-yellow-800 flex-1 leading-relaxed">{@html proj.teaser}</p>
        </div>

        <!-- tags animés -->
        <div class="flex flex-wrap gap-2">
          {#each proj.tags as tag}
            <span class="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow animate-fade-in hover:scale-110 transition-transform duration-200 cursor-pointer">
              {tag}
            </span>
          {/each}
        </div>

        <!-- lien stylisé -->
        <a
          href={proj.link}
          target="_blank"
          class="inline-block font-medium text-yellow-800 underline-offset-2 hover:underline transition-all"
        >
          Voir le site →
        </a>

        <!-- sections détaillées -->
        <div class="space-y-8">
          {#each proj.details as detail, i}
            <div class="md:flex md:space-x-6 items-start">
              {#if proj.images[i]}
                <img
                  src={proj.images[i]}
                  alt=""
                  class="w-full md:w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              {/if}
              <div class="mt-3 md:mt-0">
                <h4 class="text-lg font-semibold text-yellow-900 mb-2">{detail.title}</h4>
                <p class="text-sm text-yellow-800 leading-relaxed">{@html detail.text}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fade-in { from { opacity: 0; transform: translateY(-10px);} to { opacity:1; transform: translateY(0);} }
  @keyframes scale-up { from { opacity: 0; transform: scale(0.9);} to { opacity:1; transform: scale(1);} }
  .animate-fade-in { animation: fade-in 0.3s ease-out; }
  .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.4,0,0.2,1); }
</style>
