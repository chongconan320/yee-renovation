<script setup lang="ts">
import HeroSection from './Hero.vue'
import AboutUs from './AboutUs.vue'
import OurWorks from './OurWorks.vue'
import OurServices from './OurServices.vue'
import OurLocation from './OurLocation.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
</script>
<template>
  <HeroSection />

  <section class="our-works">
    <OurWorks />
  </section>
  <section class="our-services">
    <OurServices />
  </section>
  <section class="our-location">
    <OurLocation />
  </section>
  <section class="contact">
    <Contact />
  </section>
  <section class="footer">
    <Footer />
  </section>
</template>

<style scoped lang="scss">
section {
  margin-top: 3em;
}
section:nth-last-child(1),
section:nth-last-child(2) {
  margin-top: 0;
}
</style>
