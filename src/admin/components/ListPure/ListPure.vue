<template lang="pug">
  ul.list
    li.item(v-for="item in categories") {{item.category}}
</template>
<script>
export default {
  props: ["categories"] 
}
</script>