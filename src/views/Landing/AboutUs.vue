<template>
  <div class="about-us">
    <h1 class="about-us__title">
      {{ $t('landing.about-us-title') }}
    </h1>
    <p class="about-us__description">
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
  padding: 0.75em $horizontal_padding;
  margin-bottom: 1em;
  text-transform: uppercase;
}

.about-us__description {
  padding: 0 $horizontal_padding;
}
</style>
