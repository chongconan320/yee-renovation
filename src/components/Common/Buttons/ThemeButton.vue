<script setup lang="ts"></script>
<template>
  <v-btn variant="outlined" class="button">
    <span class="button__text">
      <slot name="default"></slot>
    </span>
  </v-btn>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.button {
  border-radius: 0;
  border-width: 3px;
  height: 40px;
}
.button__text {
  color: $primary;
  font-size: 1.25rem;
}
</style>
