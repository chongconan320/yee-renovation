<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import logo from '@/assets/svgs/logo.svg'
import { onMounted } from 'vue'
import AOS from 'aos'
import { VApp } from 'vuetify/components'
import { ref, watch } from 'vue'
import { nextTick } from 'vue'

const isDrawerExpanded = ref(true)
const onToggleDrawer = () => {
  isDrawerExpanded.value = !isDrawerExpanded.value
}
const scrollTop = ref(0)
const navigations = [
  {
    route: '/',
    text: 'home'
  },
  {
    route: '/services',
    text: 'Services'
  },
  {
    route: '/about-us',
    text: 'About us'
  },
  {
    route: '/contact-us',
    text: 'Contact Us'
  }
]

const route = useRoute()

onMounted(() => {
  AOS.init({
    once: true,
    easing: 'ease-in-out',
    duration: 500
  })
})
watch(isDrawerExpanded, () => {
  const { scrollY } = window
  if (isDrawerExpanded.value) {
    scrollTop.value = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh'
    document.body.scrollTo({ top: scrollY })
    return
  }
  document.body.style.overflow = 'visible'
  document.body.style.height = 'auto'
  window.scrollTo({ top: scrollTop.value })
})
</script>

<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer
        v-model="isDrawerExpanded"
        temporary
        location="left"
        color="dark"
        class="drawer"
      >
        <v-img :src="logo" class="logo" />

        <v-list>
          <v-list-item
            v-for="navigation in navigations"
            :key="navigation.route"
            :class="['list-item', route.path === navigation.route && 'list-item--active']"
          >
            {{ navigation.text }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar color="dark" class="app-bar">
        <template #image>
          <v-img :src="logo" />
        </template>
        <template #append>
          <div @click="onToggleDrawer" style="cursor: pointer">
            <v-icon icon="mdi-menu" color="primary" />
          </div>
        </template>
      </v-app-bar>
      <v-main> <router-view /> </v-main>
    </v-layout>
  </v-app>
</template>

<style lang="scss">
@import '@/assets/variables';

.app-bar {
  position: fixed !important;
  & .v-toolbar__image {
    margin-left: 0.75em;
    width: 108px;
  }
}

.logo {
  margin: 16px;
  width: 40%;
}
.drawer {
  position: fixed !important;
}
.list-item {
  font-size: 1.5rem;
  padding: 1em 1rem !important;
  text-transform: uppercase;
  cursor: pointer;
}
.list-item--active {
  background-color: $primary;
}
</style>
