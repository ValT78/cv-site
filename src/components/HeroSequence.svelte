<script lang="ts">
  import { onMount } from 'svelte';
  import Typewriter from 'svelte-typewriter';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  let stage = 0;

  onMount(() => {
    gsap.to({}, {  // timeline pour faire avancer le stage en fonction du scroll
      scrollTrigger: {
        trigger: '.stage-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate(self) {
          const val = self.progress * 3; // étapes 0 → 3
          stage = Math.floor(val);
        }
      }
    });
  });
</script>

<style>
  .stage-container { height: 300vh; position: relative; }
  section { height: 100vh; display: flex; align-items: center; justify-content: center; }
</style>

<div class="stage-container">
  <!-- Stage 0 : terminal -->
  <section class="bg-black text-green-400 font-mono">
    {#if stage === 0}
      <div class="text-lg">
        kubectl get pods --namespace=default  
        <span class="blink">_</span>  
        <br/><span class="mt-4 block">scroll to see more …</span>
      </div>
    {/if}
  </section>

  <!-- Stage 1 & 2 : typing du nom -->
  <section class="bg-black text-white">
    {#if stage >= 1}
      <Typewriter
        words={['Valentin Lantigny']}
        cursor={true}
        delay={200}
        interval={100}
        loop={false}
        disabled={stage > 1 ? false : false} />
    {/if}
  </section>

  <!-- Stage 3 : reveal du contenu hero -->
  <section id="hero" class="relative flex flex-col items-center justify-center text-white overflow-hidden bg-gradient-to-br from-[#677c8d]/90 to-[#2c344c]/90">
    <slot />
  </section>
</div>
