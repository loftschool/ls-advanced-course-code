import tabs from "./Tabs";
import { bgDecorator } from "../../../../.storybook/decorators";
import { action } from '@storybook/addon-actions';

const methods = {
  onChange: action("onChange")
}

export default {
  title: "Tabs",
  decorators: [bgDecorator],
};

export const defaultView = () => ({
  components: { tabs },
  methods,
  template: `
    <tabs 
      @change="onChange"
    /> 
  `,
});
