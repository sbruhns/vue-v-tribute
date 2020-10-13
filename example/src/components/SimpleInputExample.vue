<template>
  <div>
    <h2>Simple Input</h2>

    <label for="simple-input">Simple Input Example: </label>
    <input autocomplete="off" v-tribute="{ values: tributeValues }" id="simple-input" type="text" />
    <p>values: {{ tributeValues }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SimpleInputExample',
  props: {
    tributeValues: {
      type: Array,
    },
  },
});
</script>
