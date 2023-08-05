<script setup lang="ts">
import { RouterView, useRoute, useRouter, RouterLink } from 'vue-router'
import logo from '@/assets/svgs/logo.svg'
import WHATSAPPS from '@/assets/svgs/whatsapps.svg'
import { onMounted } from 'vue'
import AOS from 'aos'
import { VApp } from 'vuetify/components'
import { ref, watch } from 'vue'
import { useDisplay } from 'vuetify'

const isDrawerExpanded = ref(false)
const onToggleDrawer = () => {
  isDrawerExpanded.value = !isDrawerExpanded.value
}
const display = useDisplay()
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
  }
]
const WHATSAPPS_LINK = `https://wa.me/60143327987?${new URLSearchParams({
  text: "Hi! I am interested to your service. Let's talk."
})}`

const appBarRef = ref<HTMLDivElement>()

const route = useRoute()

onMounted(() => {
  AOS.init({
    once: true,
    easing: 'ease-in-out',
    duration: 500
  })
  document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 60) {
      appBarRef.value?.classList.add('app-bar--dark')
      return
    }
    appBarRef.value!.className = 'app-bar'
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
})
</script>

<template>
  <v-app>
    <a
      target="_blank"
      class="whatsapps"
      aria-label="Chat on WhatsApp"
      alt="Chat on WhatsApps"
      :href="WHATSAPPS_LINK"
    >
      <v-img :src="WHATSAPPS" />
    </a>

    <v-layout>
      <v-navigation-drawer
        v-model="isDrawerExpanded"
        temporary
        location="left"
        color="dark"
        class="drawer"
      >
        <div class="logo-wrapper">
          <img :src="logo" class="logo" />
        </div>

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
      <div class="app-bar" ref="appBarRef">
        <img :src="logo" class="logo" />
        <div class="navigations" v-if="display.mdAndUp.value">
          <router-link
            active-class="active"
            v-for="navigation in navigations"
            :key="navigation.route"
            :to="navigation.route"
          >
            {{ navigation.text }}
          </router-link>
          <a target="_blank" :href="WHATSAPPS_LINK"> CONTACT US </a>
        </div>
        <div @click="onToggleDrawer" style="cursor: pointer" v-else>
          <v-icon icon="mdi-menu" color="white" />
        </div>
      </div>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style lang="scss">
@import '@/assets/variables';

.logo {
  height: 30px;
}

.app-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 $horizontal_padding;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 100;
  transition: background-color 300ms ease-in-out;

  & .navigations {
    .active {
      color: $primary;
      font-weight: bold;
    }
    .active::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 3px;
      background-color: $primary;
      margin-right: 2em;
      transition: width 200ms ease-in-out;
    }
    float: right;
    & a {
      position: relative;
      display: inline-block;
      margin-right: 3.5em;
      text-transform: uppercase;
      color: white;
      text-decoration: none;
    }
    & a::after {
      content: '';
      position: absolute;
      display: block;
      width: 0%;
      height: 3px;
      background-color: $primary;
      margin-right: 2em;
      transition: width 200ms ease-in-out;
    }
    & a:hover::after {
      width: 100%;
    }
    & a:last-child {
      margin-right: 0;
    }
  }
}

.app-bar--dark {
  background-color: $dark;
  -webkit-box-shadow: -9px 18px 26px -14px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -9px 18px 26px -14px rgba(0, 0, 0, 0.75);
  box-shadow: -9px 18px 26px -14px rgba(0, 0, 0, 0.75);
}

.drawer {
  position: fixed !important;
}
.list-item {
  font-size: 1.5rem;
  padding: 0.75em $horizontal_padding !important;
  text-transform: uppercase;
  cursor: pointer;
}
.list-item--active {
  background-color: $primary;
}
.logo-wrapper {
  height: 64px;
  padding: $horizontal_padding;
}
.whatsapps {
  background-color: #25d366;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 1.25em;
  right: 1.25em;
  z-index: 999;
}
</style>
