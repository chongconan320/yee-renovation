<script setup lang="ts">
import { RouterView, useRoute, useRouter, RouterLink } from 'vue-router'
import logo from '@/assets/svgs/logo.svg'
import WHATSAPPS from '@/assets/svgs/whatsapps.svg'
import { onMounted } from 'vue'
import AOS from 'aos'
import { VApp } from 'vuetify/components'
import { ref, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { onBeforeMount } from 'vue'
import { onBeforeUnmount } from 'vue'

const isDrawerExpanded = ref(false)
const onToggleDrawer = () => {
  isDrawerExpanded.value = !isDrawerExpanded.value
}
const display = useDisplay()
const scrollY = ref(0)
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

const onScrollPage = (e: Event) => {
  if (window.scrollY > window.innerHeight) {
    appBarRef.value!.className = 'app-bar app-bar--dark'
    if (window.scrollY > scrollY.value + 30) {
      appBarRef.value!.className = 'app-bar app-bar--dark app-bar--hide'
    }

    return
  }
  appBarRef.value!.className = 'app-bar'
}
const onScrollEnd = () => {
  scrollY.value = window.scrollY
}
onMounted(() => {
  AOS.init({
    once: true,
    easing: 'ease-in-out',
    duration: 500
  })
  document.addEventListener('scroll', onScrollPage)
  document.addEventListener('scrollend', onScrollEnd)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', onScrollPage)
  document.addEventListener('scrollend', onScrollEnd)
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
          <v-list-item class="list-item">
            <a target="_blank" :href="WHATSAPPS_LINK"> CONTACT US </a>
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
a {
  color: white;
  text-decoration: none;
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
  transition: background-color 150ms ease-in-out, transform 300ms ease-in-out;

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
.app-bar--hide {
  transform: translateY(-100%);
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
