<template lang="pug">
  .headline-component 
    .content(v-if="showContent")
      slot
      .desc Панель администрирования
    button(
      type="button"
      @click="$emit('logout')"
    ).logout Выйти

</template>

<script>
export default {
  props: {
    hideContent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showContent() {
      const crazyComparison = 10 > 5;
      return this.hideContent === false && crazyComparison;
    }
  }
};
</script>

<style lang="postcss" scoped>
.headline-component {
  padding: 20px;
  background-image: linear-gradient(to top, #3e3e59, #454573);
  display: flex;
  align-items: center;
  color: #ffffff80;
}

.desc {
  margin-left: 10px;
}

.content {
  display: flex;
  align-items: center;
}

.logout {
  margin-left: auto;
  color: inherit;
}
</style>