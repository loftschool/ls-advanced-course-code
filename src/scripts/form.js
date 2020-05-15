import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#form-comp",
  template: "#form",
  data() {
    return {
      skills: [],
      login: ""
    }
  },
  methods: {
    send() {
      if (!this.login) return alert("Заполни");

      axios.get("http://localhost:8000/skills/1").then((response) => {
        this.skills = response.data;
      });
    },
  },
});
