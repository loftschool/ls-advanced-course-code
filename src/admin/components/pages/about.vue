<template lang="pug">
  .about-page-container
    .container
      .about-page__title
        h1.page-title Обо мне
        button.about-page__add-new(
        ) Добавить группу

    .about-page__content
      .container.container--mobile-wide
        ul.skill-list
          li.skill-list__item
            skills-group()

</template>

<script>
export default {
  components: {
    skillsGroup: () => import("components/skills-group.vue")
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.add-skill-wrapper.blocked {
  opacity: .5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}

 .skill-container {
  border: 1px solid black;
  padding: 10px;
}

.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}

.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }

  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}
</style>



