<script setup lang="ts">
import HERO from '@/assets/images/about-us-hero.jpg'
import TEAM_MEMBER from '@/assets/images/team-member.jpg'
import TEAM_MEMBER_2 from '@/assets/images/about-us-2.jpg'
import OurLocation from '../Landing/OurLocation.vue'

import ThemeButton from '@/components/Common/Buttons/ThemeButton.vue'
</script>

<template>
  <div class="about-us">
    <div class="about-us__hero">
      <div class="about-us__overlay">
        <div class="about-us__content">
          <v-img :src="TEAM_MEMBER" class="about-us__image" />
          <div class="about-us__image-description">
            <h1 class="title">About us</h1>
            <p>{{ $t('landing.about-us-description') }}</p>
            <theme-button class="contact-us"> Contact us </theme-button>
          </div>
        </div>
      </div>
      <v-img :src="HERO" class="img" />
    </div>
    <div class="our-vision-wrapper">
      <div class="our-vision">
        <h1 class="title">Our vision</h1>
        <p>
          At Yee Design & Renovation, our vision is to transform spaces into captivating and
          harmonious environments that reflect the unique essence of our clients' aspirations and
          desires. With a commitment to excellence and an unwavering passion for creativity, we
          strive to redefine the art of renovation and design, setting new standards in the
          industry.
        </p>
        <p>
          As we pursue our vision, we remain committed to cultivating a culture of innovation,
          creativity, and sustainable practices within our team and the industry as a whole. By
          continuously challenging ourselves and pushing the boundaries of what's possible, we
          aspire to be a beacon of inspiration in the realm of renovation and design, setting the
          stage for a better, more beautiful future, one space at a time.
        </p>
      </div>
      <v-img :src="TEAM_MEMBER_2" class="team-member--2" />
    </div>
    <div class="our-location">
      <OurLocation />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.about-us {
  overflow-y: auto;
}
.about-us__hero {
  position: relative;
  .img {
    height: 100vh;
    ::v-deep(img) {
      object-fit: cover;
    }
  }
}

.about-us__overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000c9;
  z-index: 99;
  color: $white !important;
}
.title {
  position: relative;
  width: fit-content;
  &::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 3px;
    background-color: $white;
    bottom: 0;
    left: 0;
  }
}
.about-us__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 64px;
  height: calc(100vh - 64px);
  padding: $horizontal_padding;
  & h1 {
    margin: 0.5em 0;
  }
  & h4 {
    text-transform: uppercase;
  }
}
.about-us__image {
  flex: 0.5;
  width: 100%;
  & ::v-deep(img) {
    object-fit: cover;
  }
}
.about-us__image-description {
  flex: 0.6;
  position: relative;
  right: 0;
  align-self: center;
}
.contact-us {
  margin-top: 1em;
}
.our-vision-wrapper {
  display: flex;
  & ::v-deep(img) {
    object-fit: cover;
    filter: saturate(150%);
  }
}
.our-vision {
  width: 100%;
  h1 {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 2.5em;
  }
  padding: $horizontal_padding;
  background-color: $primary;
  color: $white;
}
.our-location {
  margin-top: 2em;
}
.team-member--2 {
  display: none;
}

@media (min-width: 768px) {
  .about-us__content {
    flex-direction: row;
  }
  .about-us__image-description {
    padding: 0 $horizontal_padding;
  }
  .our-vision {
    width: 50%;
  }
  .team-member--2 {
    display: block;
  }
}
</style>
