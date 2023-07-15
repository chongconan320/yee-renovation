<script setup lang="ts">
import { Title } from '@/components/Landing'
import GALLERY_1 from '@/assets/images/gallery_1.jpg'
import GALLERY_2 from '@/assets/images/gallery_2.jpg'
import GALLERY_3 from '@/assets/images/gallery_3.jpg'
import GALLERY_4 from '@/assets/images/gallery_4.jpg'
import GALLERY_5 from '@/assets/images/gallery_5.jpg'
import GALLERY_6 from '@/assets/images/gallery_6.jpg'
</script>
<template>
  <div class="our-works">
    <Title :title="$t('landing.our-works-title')">
      <template #subtitle>
        {{ $t('landing.our-works-subtitle') }}
      </template>
    </Title>
    <VRow class="our-works__gallery-container">
      <VCol cols="6" class="our-works__gallery-column">
        <VImg :src="GALLERY_1" class="our-works__picture our-works__picture--left" />
        <VImg :src="GALLERY_2" class="our-works__picture our-works__picture--left" />
        <VImg :src="GALLERY_3" class="our-works__picture our-works__picture--left" />
      </VCol>
      <VCol cols="6" class="our-works__gallery-column">
        <VImg :src="GALLERY_4" class="our-works__picture our-work__picture--right" />
        <VImg :src="GALLERY_5" class="our-works__picture our-work__picture--right" />
        <VImg :src="GALLERY_6" class="our-works__picture our-work__picture--right" />
      </VCol>
    </VRow>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';
.our-works__gallery-container {
  margin-top: 1em;
  padding: 0 $horizontal_padding;
}
.our-works__gallery-column {
  display: flex;
  flex-direction: column;
  height: 1000px;
}
.our-works__picture {
  ::v-deep(img) {
    object-fit: cover;
  }
}
.our-works__picture--left:first-child {
  flex: 0.2;
}
.our-works__picture--left:nth-child(2) {
  transform: scaleX(-1);
  margin: 1em 0;
  flex: 0.35;
}
.our-works__picture--left:last-child {
  transform: scaleX(-1);
  flex: 0.45;
}

.our-work__picture--right:first-child {
  flex: 0.4;
}
.our-work__picture--right:nth-child(2) {
  flex: 0.35;
  transform: scaleX(1);
  margin: 1em 0;
}
.our-work__picture--right:last-child {
  flex: 0.3;
}
</style>
