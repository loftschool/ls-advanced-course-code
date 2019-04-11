import Vue from "vue";

new Vue({
  el: "#animations-container",
  template: "#animation",
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  methods: {
    slide(direction) {
      switch (direction) {
        case "up":
          this.currentIndex++;
          break;
        case "down":
          this.currentIndex--;
          break;
      }
    },
    makeArrWithRequiredImages(dataArray) {
      return dataArray.map((item, i) => {
        const requredPic = require(`../images/content/${item.photo}`);
        item.photo = requredPic;

        return item;
      });
    },
    makeInfititeLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;

      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfititeLoopForCurIndex(value);
    }
  },
  created() {
    const data = require("../data/works.json");
    const works = this.makeArrWithRequiredImages(data);

    this.works = works;
  }
});
