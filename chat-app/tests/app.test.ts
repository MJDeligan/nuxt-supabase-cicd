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

    const res = await $fetch('/api/pathTest/myParam');

    expect(res).toBeTruthy();
    expect(res.param).toBeTruthy();
    expect(res.param).toBe("myParam");
  });
});
