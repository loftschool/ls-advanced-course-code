import Vue from "vue";

new Vue({
  el: "#animations-container",
  template: "#animation",
  data() {
    return {
      works: [],
    };
  },
  computed: {
    filteredArray() {
      return [...this.works].splice(0, 3);
    }
  },
  methods: {
    enterCb(el, done) {
      const list = el.closest("ul");

      el.classList.add("outside");
      list.style.top = "100px";
      list.classList.add("transition");

      list.addEventListener("transitionend", e => {
        done();
      });
    },

    leaveCb(el, done) {
      el.classList.remove("fade");
      el.classList.add("fade");
    },

    afterCb(el) {
      const list = el.closest("ul");
      list.classList.remove("transition");
      list.style.top = 0;
      el.classList.remove("outside");
    },
    slide(direction) {
      switch (direction) {
        case "up":
          this.works.push(this.works[0]);
          this.works.shift();
          break;
        case "down":
          const lastItem = this.works[this.works.length - 1];
          this.works.unshift(lastItem);
          this.works.pop();
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
