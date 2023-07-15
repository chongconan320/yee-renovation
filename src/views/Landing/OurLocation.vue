<script setup lang="ts">
import { Title } from '@/components/Landing'
const options = {
  streetViewControl: false,
  mapTypeControl: false
}
const position = {
  lat: 3.1412502,
  lng: 101.7327454
}
</script>
<template>
  <div class="our-location">
    <Title :title="$t('landing.our-location-title')">
      <template #subtitle>
        {{ $t('landing.our-location-subtitle') }}
      </template>
    </Title>
  </div>
  <GMapMap
    class="google-map"
    :options="options"
    :center="{ lat: 3.1412502, lng: 101.7327454 }"
    :zoom="17"
    map-type-id="terrain"
    style="width: 100%; height: 750px"
  >
    <GMapMarker :position="position" :clickable="true">
      <GMapInfoWindow>
        <a
          href="https://www.google.com/maps/place/36,+Jalan+Wirawati+4,+Maluri,+55100+Kuala+Lumpur,+Wilayah+Persekutuan+Kuala+Lumpur/@3.1412502,101.7327454,19.75z/data=!4m6!3m5!1s0x31cc364883053097:0xfd6d25ef9e8fb249!8m2!3d3.1413866!4d101.7330195!16s%2Fg%2F11j301r00t?entry=ttu"
          target="_blank"
          >Yee Design & Renovation<MyComponent
        /></a>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.google-map {
  margin-top: 2em;
}
</style>
