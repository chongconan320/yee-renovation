<script setup lang="ts">
defineProps({
  src: String,
  description: String,
  size: {
    type: Number,
    default: 70
  }
})
</script>

<template>
  <div class="service">
    <VRow>
      <VCol cols="4" class="service__image">
        <v-img :src="src" :width="size" />
      </VCol>
      <VCol class="service__description">
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
</style>
