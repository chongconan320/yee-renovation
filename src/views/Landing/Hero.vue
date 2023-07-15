<script setup lang="ts">
import LANDING from '@/assets/images/landing.jpg'
</script>
<template>
  <VRow>
    <VCol cols="6">
      <span class="landing__slogan">{{ $t('landing.slogan') }}</span>
    </VCol>
    <VCol cols="6">
      <v-img :src="LANDING" class="landing__image" />
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.landing {
  overflow: hidden;
}
.landing__slogan {
  display: block;
  font-size: 2.6rem;
  font-weight: 900;
  line-height: 1.25em;
  padding-left: $horizontal-padding;
  margin-top: 2em;
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
