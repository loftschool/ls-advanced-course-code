import Vue from "vue";

new Vue({
  el: "#animations-container",
  template: "#animation",
  data() {
    return {
      works: []
    };
  },
  methods: {
    slide(direction) {
      switch (direction) {
        case "up":
          break;
        case "down":
          break;
      }
    },
    makeArrWithRequiredImages(dataArray) {
      return dataArray.map((item, i) => {
        const requredPic = require(`../images/content/${item.photo}`);
        item.photo = requredPic;

        return item;
      });
    }
  },
  created() {
    const data = require("../data/works.json");
    const works = this.makeArrWithRequiredImages(data);

    this.works = works;
  }
});
