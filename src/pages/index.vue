<script setup lang="ts">
defineOptions({
  name: 'HomePageView',
})
const { t } = useI18n()
</script>

<template>
  <section>
    <div>Base</div>
    <div>{{ t('not-found') }}</div>
  </section>
</template>
