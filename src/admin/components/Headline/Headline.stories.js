import headline from "./Headline";
import { action } from "@storybook/addon-actions";

const methods = {
  onLogout: action("onLogout"),
};

export default {
  title: "Headline",
};

export const defaultView = () => ({
  components: {
    headline,
  },
  methods,
  template: `
    <headline
      @logout="onLogout"
    >
      <h1>Содержимое</h1>   
    </headline> 
  `,
});

export const withoutContent = () => ({
  components: {
    headline,
  },
  methods,
  template: `
    <headline
      @logout="onLogout"
      hideContent 
    >
    </headline> 
  `,
});

withoutContent.story = {
  name: "Без содержимого",
};
