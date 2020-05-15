import Tabs from "./Tabs.vue";
import { shallowMount } from "@vue/test-utils";

it("изменяет активный класс по клику", async () => {
  const component = shallowMount(Tabs);

  const button = component.find(".tab:nth-child(2) button");
  const item = component.find(".tab:nth-child(2)");

  button.trigger("click");

  await component.vm.$nextTick();

  expect(item.classes()).toContain("active");
});
