<template lang="pug">
  .tabs-component
    ul.tabs  
      li.tab(
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{'active' : tab.id === activeTabId}"
      )
        button(
          type="button"
          @click="changeTab(tab)"
        ).btn {{tab.title}}

</template>
<script>
const tabs = [
  { id: 0, title: "Обо мне", link: "/about" },
  { id: 1, title: "Работы", link: "/works" },
  { id: 2, title: "Отзывы", link: "/reviews" }
];

export default {
  data() {
    return {
      tabs,
      activeTabId: 0
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTabId = tab.id;
      this.$emit("change", tab);
    }
  }
};
</script>

<style lang="postcss" scoped>
.tabs {
  display: flex;
  height: 77px;
  background: #fff;
}

.active {
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: red;
  }
}

.tab {
  display: flex;
  position: relative;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>