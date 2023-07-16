<script setup>
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
  background: $dark;
  padding: $horizontal_padding $horizontal_padding;
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
</style>
