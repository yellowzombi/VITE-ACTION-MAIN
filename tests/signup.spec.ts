import { test, expect } from "@playwright/test";

test.describe("회원가입 테스트", () => {
  test.beforeEach(async ({ page }) => {
    // 회원가입 페이지로 이동
    await page.goto("http://localhost:5173/sign-up");
  });

  test("성공적인 회원가입", async ({ page }) => {
    // 입력 필드에 올바른 데이터 입력
    await page.fill('input[name="username"]', "user");
    await page.fill('input[name="email"]', "user@example.com");
    await page.fill('input[name="password"]', "password123");
    await page.fill('input[name="confirmPassword"]', "password123");
    // 회원가입 버튼 클릭
    await page.click("button#sign-up");
    // 성공 메시지 검증
    page.on("dialog", async (dialog) => {
      await expect(dialog.message()).toBe("회원가입 성공.");
      await dialog.accept();
    });
  });

  test("필수 입력 필드 누락", async ({ page }) => {
    // 일부 필드만 입력
    await page.fill('input[name="email"]', "user@example.com");
    // 회원가입 버튼 클릭
    await page.click("button#sign-up");
    // 오류 메시지 검증
    await expect(
      page.locator("text=비밀번호는 6자 이상이어야 합니다.")
    ).toBeVisible();
  });

  test("잘못된 이메일 형식", async ({ page }) => {
    await page.fill('input[name="email"]', "userexample");
    await page.fill('input[name="password"]', "password123");
    await page.fill('input[name="confirmPassword"]', "password123");
    await page.click("button#sign-up");
    await expect(
      page.locator("text=유효하지 않은 이메일 주소입니다.")
    ).toBeVisible();
  });

  test("비밀번호 불일치", async ({ page }) => {
    await page.fill('input[name="email"]', "user@example.com");
    await page.fill('input[name="password"]', "password123");
    await page.fill('input[name="confirmPassword"]', "password321");
    await page.click("button#sign-up");
    await expect(
      page.locator("text=비밀번호가 일치하지 않습니다.")
    ).toBeVisible();
  });
});
