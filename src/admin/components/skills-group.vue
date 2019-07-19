<template lang="pug">
  .skill-container
    input(type="text" placeholder="Создать группу").skill-input
    button(type="button") Добавить
    hr
    table
      tr(v-for="n in 10")
        td Скилл
        td Процент
        td 
          button(type="button") удалить
          button(type="button") изменить
    hr
    .add-skill-wrapper.blocked
      input(type="text" placeholder="Добавить скилл")
      button(type="button") Добавить
</template>
<script>
export default {
  
}
</script>

