<script setup lang="ts">
import { Title, Service } from '@/components/Landing'
import MIRROR from '@/assets/svgs/mirror.svg'
import STEEL from '@/assets/images/steel.png'
import DROP from '@/assets/images/drop.png'
import SHOPPING_BAG from '@/assets/images/shopping-bag.png'
import { ThemeButton } from '@/components/Common/Buttons'
</script>
<template>
  <div class="our-services">
    <Title :title="$t('landing.our-services-title')">
      <template #subtitle>
        {{ $t('landing.our-services-subtitle') }}
      </template>
    </Title>
    <div class="our-services__services">
      <Service :src="MIRROR" :description="$t('landing.our-services-mirror-description')" />
      <Service :src="STEEL" :description="$t('landing.our-services-steel')" />
      <Service :src="DROP" :description="$t('landing.our-services-airdrop')" :size="60" />
      <Service :src="SHOPPING_BAG" :description="$t('landing.our-services-shopping-bag')" />
    </div>
    <div class="button">
      <theme-button>{{ $t('landing.our-services-see-more') }}</theme-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';
.our-services {
  padding: 0 $horizontal_padding;
}
.our-services__services {
  display: flex;
  margin-top: 2.5em;
  flex-direction: column;
  row-gap: 5em;
}

.button {
  text-align: center;
  margin-top: 1.5em;
}
</style>
