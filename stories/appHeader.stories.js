import appHeader from "../src/admin/components/header.vue";
import "../src/admin/default.pcss";

export default {
  title: "header",
  component: appHeader
}

export const Text = () => ({
  components: { appHeader },
  template: '<app-header>Hello Button</app-header>',
});