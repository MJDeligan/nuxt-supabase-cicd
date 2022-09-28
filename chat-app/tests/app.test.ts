import { describe, expect, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
import App from "app.vue";

describe("My Test", async () => {
  await setup({});

  test("app built", async () => {
    expect(App).toBeTruthy();

    const body = await $fetch('/api/test');
    
    expect(body).toBeTruthy();
    expect(body.param).toBeTruthy();
    expect(body.param).toBe("hello");
  });
});
