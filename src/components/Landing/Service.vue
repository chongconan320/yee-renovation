<script setup lang="ts">
import { useDisplay } from 'vuetify'

defineProps({
  src: String,
  description: String,
  size: {
    type: Number,
    default: 70
  }
})
const display = useDisplay()
</script>

<template>
  <div class="service">
    <VRow>
      <VCol
        cols="4"
        class="service__image"
        :data-aos="display.mdAndUp.value ? 'slide-up' : 'slide-right'"
        duration="800"
      >
        <v-img :src="src" :width="size" eager />
      </VCol>
      <VCol
        class="service__description"
        :data-aos="display.mdAndUp.value ? 'slide-up' : 'slide-left'"
      >
        <p>{{ description }}</p>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.service {
}

.service__image {
  .v-img {
    margin: auto;
  }
  ::v-deep(img) {
    margin: 0 auto;
  }
}

.service__description {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 764px) {
  .our-services__services {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
