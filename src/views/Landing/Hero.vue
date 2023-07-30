<script setup lang="ts">
import LANDING from '@/assets/images/landing.jpg'
import { ThemeButton } from '@/components/Common/Buttons'
</script>
<template>
  <div class="hero">
    <VRow>
      <VCol cols="6" data-aos="slide-right">
        <span class="landing__slogan">{{ $t('landing.slogan') }}</span>
      </VCol>
      <VCol cols="6" data-aos="slide-left">
        <v-img :src="LANDING" class="landing__image" />
      </VCol>
    </VRow>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';
.hero {
}
.landing {
  overflow: hidden;
}
.landing__emphasis {
  font-size: 2rem;
  font-weight: 200;
  padding: $horizontal-padding;
}
.landing__slogan {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.25em;
  padding-left: $horizontal-padding;
  margin-top: 2.5em;
}
.landing__quote {
  padding: 0 $horizontal_padding;
  ::v-deep(.button) {
    width: 100%;
    height: 3rem;
  }
}
.landing__image {
  position: relative;
  width: 100%;
  height: 45vh;
  border-bottom-left-radius: 120px;
  ::v-deep(img) {
    object-fit: cover;
    object-position: 32% 0;
  }
}
</style>
