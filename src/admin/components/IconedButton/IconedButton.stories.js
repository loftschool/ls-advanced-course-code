import iconedButton from "./IconedButton.vue";

import { action } from "@storybook/addon-actions";

const methods = {
  onClick: action("onClick"),
};
export default {
  title: "IconedButton",
};

export const defaultView = () => ({
  components: { iconedButton },
  methods,
  template: `
    <iconedButton
      title="Добавить группу" 
      @click="onClick"
    />
  `,
});
