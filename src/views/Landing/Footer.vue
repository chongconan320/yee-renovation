<script setup lang="ts">
const services = [
  'specialist-giass-aluminium',
  'repair-roof-leaking',
  'waterproofing-work',
  'renovation-rebuild-for-houses',
  'renovation-for-commercial',
  'ceiling-partition-work',
  'customize-furniture',
  'ceramic-porcelain-tiles-work',
  'electric-work',
  'plumbing',
  'painting',
  'service-repair',
  'maintenance-work-commercial',
  'steel-stainless-steel-work'
]
</script>

<template>
  <div class="footer">
    <div class="footer__wrapper">
      <h3>{{ $t('landing.footer-title') }}</h3>
      <span class="footer__ssm-number">(002548597-W)</span>
      <p>{{ $t('landing.footer-description') }}</p>
      <div class="footer__our-services">
        <h4>{{ $t('landing.our-services-title') }}</h4>
        <ul class="services">
          <li v-for="service in services" :key="service">
            {{ $t(`common.${service}`) }}
          </li>
        </ul>
      </div>
      <div class="footer__office-hours">
        <h4>{{ $t('common.office-hours') }}</h4>
        <p>{{ $t('common.mon-sat') }} 9:00 A.M - 5:30 P.M</p>
        <p>{{ $t('common.mon-sun') }}</p>
      </div>
      <div class="footer__copyright">
        <p>© 2023 BY YEE DESIGN & RENOVATION | {{ $t('common.copyright') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

h3,
h4,
p,
span {
  color: $white;
}

h3,
h4 {
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

.footer {
  position: relative;
  padding: $horizontal_padding $horizontal_padding;
  background-color: $dark;
}
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: url('@/assets/images/ceramic_tile.jpg');
  background-repeat: no-repeat, no-repeat;
  background-size: cover; /* Resize the background image to cover the entire container */
}
.footer__wrapper {
  position: relative;
  max-width: $max-width;
  margin: auto;
  z-index: 99;
}

.footer__ssm-number {
  display: block;
  margin: 0.5em 0;
}

.footer__our-services {
  margin-top: 2em;
}

.services {
  padding: 0 $horizontal_padding;
  color: $white;
  & li {
    text-transform: capitalize;
    margin-top: 0.5em;
    width: fit-content;
  }
  & li:hover {
    cursor: pointer;
  }
}

.footer__office-hours {
  margin-top: 1em;
  & p {
    margin-top: 0.3em;
  }
}
.footer__copyright {
  margin-top: 2em;
  font-size: 0.75rem;
}

@media (min-width: 768px) {
  .services {
    display: block;
    & li {
      position: relative;
      float: left;
      margin-right: 2.5em;
      margin-bottom: 0.5em;
    }
    & li::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      content: '';
      background-color: $primary;
      width: 0;
      height: 2px;
      transition: width 300ms ease-in-out;
    }
    & li:hover::after {
      width: 100%;
    }
    margin-bottom: 10em;
  }
}
</style>
