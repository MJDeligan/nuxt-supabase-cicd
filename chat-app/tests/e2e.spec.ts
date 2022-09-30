import { describe, expect, test } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
import { Prisma } from "@prisma/client";
import App from "app.vue";

describe("My Test", async () => {
  await setup({});

  test("app built", async () => {
    expect(App).toBeTruthy();

    const userCreate: Prisma.UserBaseCreateInput = {
      username: "Max Giermann",
    };
    const user = await $fetch("/api/users", {
      method: "POST",
      body: userCreate,
    });

    expect(user).toBeTruthy();
    expect(user.id).toBeTruthy();
    expect(user.username).toBe("Max Giermann");
  });
});
