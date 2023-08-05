<template>
  <div class="about-us">
    <div class="about-us__title">
      <h1 data-aos="slide-right" data-aos-offset="0">
        <span>
          {{ $t('landing.about-us-title') }}
        </span>
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
  & span {
    display: block;
    max-width: $max-width;
    margin: auto;
  }
}

.about-us__description {
  padding: 0 $horizontal_padding;

  max-width: $max-width;
  margin: auto;
}

@media (min-width: $max-width) {
  .about-us__description {
    padding: 0;

    max-width: $max-width;
    margin: auto;
  }
}
</style>
