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
            .card
              .card__title
                .card__title-text
                  .skills-card-title
                    .skills-card-title__input
                      app-input(
                        placeholder="Название новой группы"
                        no-side-paddings
                      )
                    .skills-card-title__buttons
                      .skills-card-title__btn
                        iconed-btn(
                          class="is-tick no-words"
                          @click="$emit('approve')"
                        )
                      .skills-card-title__btn
                        iconed-btn(
                          class="is-cross no-words"
                          @click="$emit('closeOrRemove')"
                        )
              .card__content
                .skill-list__table
                  .skills-table-container
                    table.skills
                      tr.skills-row-wrapper(
                        :class="{'blocked': blocked}"
                        v-if="editmode === false"
                      )
                        td.skills__cell {{skill.title}}
                        td.skills__cell 
                          .skills__input
                            .skills__input-text {{skill.percent}}
                        td.skills__cell
                          iconed-btn(
                            class="is-pencil no-words grayscale"
                            @click="editmode = true"
                          )
                        td.skills__cell          
                          iconed-btn(
                            class="is-trash no-words grayscale"
                            @click="removeExistedSkill"
                          )
                    .add-new
                      form.add-new-container()
                        .add-new__inputs
                          .add-new__col
                            app-input(
                              placeholder="Новый навык"
                            )
                          .add-new__col.add-new__col_small
                            app-input(
                              type="number"
                              min="0"
                              max="100"
                              maxlength="3" 
                            )
                        button(type="submit" data-text="+").add-new__button
</template>

<script>
export default {
  components: {
    skillsCard: () => import("components/card.vue"),
    appInput: () => import("components/input.vue"),
    addNewSkillsGroup: () => import("components/skills-add-group.vue"),
    addNewSkill: () => import("components/skills-add-item.vue"),
    skillsTable: () => import("components/skills-items.vue"),
    skillsTitle: () => import("components/skills-title.vue"),
    iconedBtn: () => import("components/iconed-btn.vue"),
  },
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showAddingCard: false,
      loading: false,
      title: ""
    };
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
add-new-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &.is-blocked {
    opacity: 0.3;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}

.add-new__inputs {
  display: flex;
  width: 100%;
}

.add-new__col {
  margin-right: 10px;
  flex: 1;

  &:last-child {
    margin-right: 0;
  }
  &_small {
    width: 75px;
    flex: initial;
  }
}

.add-new__button {
  width: 40px;
  height: 40px;
  position: relative;
  padding: 0;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%) center center;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin-left: 34px;
  flex-shrink: 0;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    line-height: 40px;
  }
}
.skills {
  width: 100%;
}

.skills-card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skills-card-title__input {
  width: 60%;
}

.skills-card-title__buttons {
  display: flex;
}

.skills-card-title__btn {
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
}
.card {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &_plain {
    padding: 0;
  }
}

.card__title {
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}

.card__content {
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
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

.skills {
  margin-bottom: 60px;

  tr:last-child {
    .skills__cell {
      padding-bottom: 0;
    }
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

.skill-list__table {
  margin-bottom: 40px;
}

.add-new {
  padding-left: 18%;
  position: relative;
  margin-top: auto;

  @include phones {
    padding-left: 0;
  }
}
</style>



