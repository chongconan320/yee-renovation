<template>
  <div class="about-us">
    <div class="about-us__title">
      <h1 data-aos="slide-right" data-aos-offset="0">
        {{ $t('landing.about-us-title') }}
      </h1>
    </div>

    <p class="about-us__description" data-aos="slide-up">
      {{ $t('landing.about-us-description') }}
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/variables';

.about-us__title {
  background: $primary;
  color: $white;
  padding: 1.2em $horizontal_padding;
  margin-bottom: 1em;
  text-transform: uppercase;
}

.about-us__description {
  padding: 0 $horizontal_padding;
}
</style>
