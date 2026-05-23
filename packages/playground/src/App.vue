<script setup lang="ts">
  import { ref } from 'vue';
  import { VueDatePicker } from '@vuepic/vue-datepicker';

  const date = ref(new Date());
</script>

<template>
  <div style="padding: 200px">
    <VueDatePicker v-model="date" />
  </div>
</template>
