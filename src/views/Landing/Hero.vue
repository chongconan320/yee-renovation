<script setup lang="ts">
import LANDING from '@/assets/images/landing.jpg'
import { ThemeButton } from '@/components/Common/Buttons'
import { useDisplay } from 'vuetify'

const display = useDisplay()
</script>
<template>
  <div class="hero">
    <div class="hero__overlay">
      <div class="overlay__content" :data-aos="display.lgAndUp ? 'fade-in' : 'slide-right'">
        <h1 class="landing__slogan">
          Build your <span class="landing__slogan--emphasis">dream </span>house
        </h1>
        <p class="landing__description">Get your personalied quote now</p>
        <div class="landing__button">
          <theme-button class="landing__button"> Get your quotes </theme-button>
        </div>
      </div>
    </div>
    <v-img :src="LANDING" class="landing__image" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';
.hero {
  position: relative;
  color: $white;
}

.landing__slogan {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.25em;
  padding-left: $horizontal-padding;
}
.landing__slogan--emphasis {
  color: $primary;
  text-transform: uppercase;
}
.landing__description {
  font-size: 1.25rem;
  line-height: 1.25em;
  padding-left: $horizontal-padding;
  margin-top: 1em;
}

.hero__overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #000000c9;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  justify-content: center;
  align-items: center;
}

.landing__image {
  position: relative;
  width: 100vw;
  height: 100vh;
  ::v-deep(img) {
    object-fit: cover;
  }
}
.landing__button {
  margin-top: 1em;
  padding: 0 $horizontal_padding;
  & button {
    ::v-deep(.button__text) {
      color: $white;
    }
  }
}
</style>
