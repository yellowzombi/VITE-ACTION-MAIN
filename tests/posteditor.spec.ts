// tests/PostEditor.spec.ts
import { test, expect } from "@playwright/test";

test.describe("게시물 작성 페이지", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("에디터가 초기 콘텐츠로 렌더링된다", async ({ page }) => {
    await expect(page.locator("text=Toast UI Editor Example")).toBeVisible();
    await expect(page.locator("text=Hello, Toast UI Editor!")).toBeVisible();
  });

  test("제목과 내용이 비어있을 때 유효성 검사 메시지를 표시한다", async ({
    page,
  }) => {
    await page.click("text=Submit");
    await expect(page.locator("text=Title is required")).toBeVisible();
    await expect(page.locator("text=Content is required")).toBeVisible();
  });

  test("변경 시 내용이 로컬 스토리지에 저장된다", async ({ page }) => {
    const editor = page.locator(".toastui-editor-md-container");
    await editor.fill("새로운 내용");
    const content = await page.evaluate(() =>
      localStorage.getItem("postContent")
    );
    expect(content).toBe("새로운 내용");
  });

  test("초기화 시 로컬 스토리지에서 내용을 불러온다", async ({ page }) => {
    await page.evaluate(() =>
      localStorage.setItem("postContent", "저장된 내용")
    );
    await page.reload();
    await expect(page.locator(".toastui-editor-md-container")).toHaveText(
      "저장된 내용"
    );
  });

  test("제출 후 내용을 초기화한다", async ({ page }) => {
    await page.fill('input[name="title"]', "게시물 제목");
    const editor = page.locator(".toastui-editor-md-container");
    await editor.fill("게시물 내용");
    await page.click("text=Submit");
    await expect(page.locator('input[name="title"]')).toBeEmpty();
    await expect(editor).toBeEmpty();
  });
});
