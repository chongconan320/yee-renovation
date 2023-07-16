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
  <section class="about-us">
    <AboutUs />
  </section>
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
  margin-top: 3.5em;
}
section:nth-last-child(2),
section:nth-last-child(1) {
  margin-top: 0;
}
.about-us {
  margin-top: 6em;
}
</style>
