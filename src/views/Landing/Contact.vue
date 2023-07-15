<script setup lang="ts">
import { ThemeButton } from '@/components/Common/Buttons'
</script>
<template>
  <div class="contact">
    <h4 class="contact__title">{{ $t('landing.contact-title') }}</h4>
    <p class="contact__description">{{ $t('landing.contact-description') }}</p>
    <v-form class="contact__form">
      <v-row>
        <v-col>
          <v-text-field
            density="compact"
            bg-color="white"
            name="email"
            variant="outlined"
            :placeholder="$t('landing.contact-email')"
            class="input"
            type="email"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            density="compact"
            bg-color="white"
            name="name"
            variant="outlined"
            :placeholder="$t('landing.contact-name')"
            class="input"
            type="text"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            density="compact"
            bg-color="white"
            name="mobile"
            variant="outlined"
            :placeholder="$t('landing.contact-mobile')"
            class="input"
            type="number"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-textarea
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
      <theme-button class="button"> send </theme-button>
    </v-form>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables';

.contact {
  background-color: $primary;
  padding: 1.5em $horizontal_padding;
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
  margin-top: 2.5em;
}
.input {
  ::v-deep(.v-label) {
    text-transform: capitalize;
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
