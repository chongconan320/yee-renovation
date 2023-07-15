<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <div class="title">
    <h1 class="title__name">{{ title }}</h1>
    <span class="title__subtitle">
      <slot name="subtitle"></slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.title {
  text-align: center;
}

.title__name {
  position: relative;
  text-transform: uppercase;
  margin-bottom: 0.3em;
}
.title__name::after {
  position: absolute;
  content: '';
  background-color: $grey;
  width: 45px;
  height: 3px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.title__subtitle {
  font-size: 0.875rem;
  text-transform: capitalize;
}
</style>
