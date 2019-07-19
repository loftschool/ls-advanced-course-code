<template lang="pug">
  .skill-container
    h2 {{category.category}}
    hr
    table
      tr(v-for="n in 10")
        td Скилл
        td Процент
        td 
          button(type="button") удалить
          button(type="button") изменить
    hr
    .add-skill-wrapper
      input(type="text" placeholder="Добавить скилл")
      button(type="button") Добавить
</template>
<script>
export default {
  props: {
    category: Object
  }  
}
</script>

<style lang="postcss" scoped>
.add-skill-wrapper.blocked {
  opacity: .5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>


