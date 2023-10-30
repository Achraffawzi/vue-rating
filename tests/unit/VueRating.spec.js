import { mount } from "@vue/test-utils";
import VueRating from "../../src/components/VueRating.vue";

describe("VueRating.vue", () => {
  it("should render props.length star(s) when mounted", async () => {
    const wrapper = mount(VueRating, {
      props: {
        length: 3,
      },
    });

    await wrapper.vm.$nextTick();
    expect(wrapper.findAll(".rating-container svg").length).toBe(3);
  });
});
