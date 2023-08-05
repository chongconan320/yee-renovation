<script setup lang="ts">
import { ThemeButton } from '@/components/Common/Buttons'
</script>
<template>
  <div class="contact">
    <div class="contact__container">
      <h4 class="contact__title" data-aos="slide-right">{{ $t('landing.contact-title') }}</h4>
      <p class="contact__description" data-aos="slide-right">
        {{ $t('landing.contact-description') }}
      </p>
      <v-form class="contact__form">
        <v-row>
          <v-col cols="12" lg="4">
            <v-text-field
              color="primary"
              density="compact"
              bg-color="white"
              name="email"
              variant="outlined"
              :placeholder="$t('landing.contact-email')"
              class="input"
              type="email"
            />
          </v-col>

          <v-col cols="12" lg="4">
            <v-text-field
              color="primary"
              density="compact"
              bg-color="white"
              name="name"
              variant="outlined"
              :placeholder="$t('landing.contact-name')"
              class="input"
              type="text"
            />
          </v-col>
          <v-col cols="12" lg="4">
            <v-text-field
              color="primary"
              density="compact"
              bg-color="white"
              name="mobile"
              variant="outlined"
              :placeholder="$t('landing.contact-mobile')"
              class="input"
              type="number"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              color="primary"
              density="compact"
              bg-color="white"
              name="message"
              variant="outlined"
              :placeholder="$t('landing.contact-message')"
              class="input"
              type="text"
            />
          </v-col>
        </v-row>
        <theme-button class="button"> {{ $t('landing.contact-send') }} </theme-button>
      </v-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.contact {
  background-color: $primary;
  padding: 1.5em $horizontal_padding;
}
.contact__container {
  margin: auto;
  max-width: $max-width;
}
.contact__title {
  color: $white;
  font-weight: 500;
}
.contact__description {
  margin: 1.25em 0;
  color: $white;
  font-size: 0.85rem;
}
.contact__form {
  margin: auto;
  max-width: $max-width;
  margin-top: 2.5em;
}
.input {
  ::v-deep(.v-label) {
    text-transform: capitalize;
  }
  ::v-deep(.v-text-field--outlined) {
    border-color: rgba(192, 0, 250, 0.986);
  }
  ::v-deep(input) {
    &::-webkit-input-placeholder {
      text-transform: capitalize;
      color: black;
    }
  }
  ::v-deep(textarea) {
    &::-webkit-input-placeholder {
      text-transform: capitalize;
      color: black;
    }
  }
}

.button {
  border-color: $white;
  width: 100%;
  ::v-deep(.button__text) {
    color: $white;
  }
}
</style>
