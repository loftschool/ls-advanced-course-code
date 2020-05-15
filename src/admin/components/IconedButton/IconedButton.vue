<template lang="pug">
  button(
    v-on="$listeners"
    type="button"
  ).iconed-button-component + {{title}}
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="postcss" scoped>
</style>