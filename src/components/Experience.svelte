
<script lang="ts">
  import { experiences } from '../data/experiences.ts';
  import ExperienceCard from './ExperienceCard.svelte';

  let openId: string = '';
  function handleToggle(event: { detail: { id: string; }; }) {
    openId = openId === event.detail.id ? '' : event.detail.id;
    console.log('Toggle experience:', openId);
  }
</script>

<section id="experience" class="relative py-20 bg-gradient-to-b from-[#9cccd4] to-[#677c8d] overflow-hidden">
  <!-- Motif SVG animé en background -->
  <svg class="absolute inset-0 w-full h-full opacity-20 animate-spin-slow" xmlns="http://www.w3.org/2000/svg">
    <defs><pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 20 h40 M20 0 v40" stroke="#2c344c" stroke-width="1"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#circuit)" />
  </svg>
<!-- x-data="{ open: null }" -->
  <div class="relative max-w-4xl mx-auto px-4" >
    <h2 class="text-4xl font-bold text-[#2c344c] mb-16 text-center">Expériences Professionnelles</h2>

    <!-- Ligne de timeline -->
    <div class="absolute left-1/2 transform -translate-x-1 bg-gradient-to-b from-[#8c6c34] to-[#f8b730] w-1 h-full animate-pulse"></div>

    <div class="space-y-16">
      {#each experiences as exp, i}
        <div class="flex {i % 2 === 0 ? 'justify-start' : 'justify-end'}">
          <ExperienceCard exp={exp} />
        </div>
      {/each}
    </div>
  </div>

  <style>
    @keyframes glow {
      0%,100% { opacity: 0.6; background-position: 0% 50%; }
      50% { opacity: 1; background-position: 100% 50%; }
    }
    .animate-glow {
      background-size: 200% 100%;
      animation: glow 2s ease-in-out infinite;
    }
    @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
    .animate-spin-slow { animation: spin-slow 60s linear infinite; }
  </style>
</section>
