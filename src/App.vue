<script setup lang="ts">
import { RouterView } from 'vue-router'
import logo from '@/assets/svgs/logo.svg'
</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar color="dark" class="app-bar">
        <template #image>
          <v-img :src="logo" />
        </template>
        <template #append>
          <v-icon icon="mdi-menu" color="primary" />
        </template>
      </v-app-bar>

      <v-main> <router-view /> </v-main>
    </v-layout>
  </v-app>
</template>

<style lang="scss">
.app-bar {
  & .v-toolbar__image {
    margin-left: 0.75em;
    width: 108px;
  }
}
</style>
