<script>
  export let subTexts = [];
  export let mainText = "Dropdown";

  let isDropdownOpen = false;

  const handleDropdownClick = () => {
    isDropdownOpen = !isDropdownOpen;
  };

  const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
    isDropdownOpen = false;
  };
</script>

<div class="relative flex lg:inline-block mx-2 my-1 transform hover:-translate-y-1 transition-transform duration-300" on:focusout={handleDropdownFocusLoss}>
  <!-- Button -->
  <button
    on:click={handleDropdownClick}
    class="
      flex items-center justify-between gap-2
      bg-sky-300 text-gray-800
      hover:bg-amber-400 hover:text-gray-800
      focus:ring-4 focus:ring-amber-400
      font-semibold rounded-full
      text-md px-4 py-2
      shadow transition-all duration-300
    "
    type="button"
  >
    {mainText}
    <svg
      class={`w-4 h-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>

  <!-- Dropdown menu -->
  {#if isDropdownOpen}
    <ul
      class="absolute lg:right-0 lg:mt-2 lg:w-48 lg:bg-sky-200 lg:border lg:border-gray-800 lg:rounded-lg lg:shadow-lg lg:divide-y lg:divide-gray-800
                right-[-0.5rem] top-full mt-0 w-48 bg-sky-200 border border-gray-800 rounded-lg shadow-lg divide-y divide-gray-800
                animate-fade-slide
                lg:top-auto lg:left-auto
                md:right-[-0.5rem] md:top-0 md:left-full md:mt-0 md:translate-x-2
                "
      style="z-index:1000;"
      aria-labelledby="dropdownButton">
      {#each subTexts as sub}
        <li>
          <a href={sub.url} class="block w-full text-left rounded-lg px-4 py-2 text-gray-800 hover:bg-amber-400 hover:text-white transition-colors duration-300 z-50">
            {sub.text}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  @keyframes fade-slide {
    0% {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-slide {
    animation: fade-slide 0.2s ease-out;
  }
</style>
