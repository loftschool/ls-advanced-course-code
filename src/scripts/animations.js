import Vue from "vue";

const compA = {
  template: "#comp-a"
};

const compB = {
  template: "#comp-b"
};

const customInput = {
  template: "#input",
  props: ['value']
}

const animationTest = {
  components: {
    compA,
    compB,
    customInput
  },
  template: "#test",
  data() {
    return {
      compToShow: "compA",
      model: ""
    };
  },
  methods: {
    add() {
      this.arr.shift();
      this.arr.push(this.arr[this.arr.length - 1] + 1);
    },
    change() {
      this.compToShow = this.compToShow === 'compA' ? 'compB' : 'compA'
    }
  }
};

new Vue({
  components: {
    animationTest
  },
  el: "#animations-container",
  template: "#animation",
  data() {
    return {
      works: [],
      currentIndex: 0,
      animationName: "slideUp"
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
      // const worksArray = [...this.works];

      switch (direction) {
        case "up":
          this.works.push(this.works[0]);
          this.works.shift();
          this.currentIndex++;
          this.animationName = "slideUp";
          break;
        case "down":
          const lastItem = this.works[this.works.length - 1];
          this.works.unshift(lastItem);
          this.works.pop();
          this.currentIndex--;
          this.animationName = "slideDown";
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
