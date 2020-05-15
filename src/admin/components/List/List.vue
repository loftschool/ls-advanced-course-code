<template lang="pug">
  list-pure(
    :categories="categories"
  )
</template>
<script>
import { mapActions, mapState } from "vuex";
import listPure from "../ListPure";
export default {
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  components: {
    listPure
  },
  methods: {
    ...mapActions("categories", ["fetchCategories"])
  },
  created() {
    this.fetchCategories();
  }
};
</script>