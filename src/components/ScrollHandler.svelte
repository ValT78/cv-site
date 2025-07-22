<script>
  import { onMount } from 'svelte';
  
  let heroDone = false;
  
  onMount(() => {
    const heroSection = document.getElementById('hero');
    const heroHeight = heroSection.offsetHeight;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > heroHeight * 0.7 && !heroDone) {
        heroDone = true;
        window.dispatchEvent(new CustomEvent('hero-scroll-complete'));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>