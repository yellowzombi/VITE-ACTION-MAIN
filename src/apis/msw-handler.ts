import { HttpResponse, http } from "msw";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
console.log(apiBaseUrl, import.meta.env.VITE_API_URL);

export const handlers = [
  // 회원가입 API 핸들러
  http.post(`${apiBaseUrl}/register`, () => {
    return HttpResponse.json(
      {
        data: "Registered successfully",
      },
      { status: 200 }
    );
  }),
  // 로그인 API 핸들러
  http.post(`${apiBaseUrl}/login`, async (info) => {
    const { email } = (await info.request.json()) as { email: string };
    if (email)
      return HttpResponse.json(
        {
          email,
          userId: 123123,
          token: "fake-jwt-token",
          message: "Login Sucdessful",
        },
        { status: 200 }
      );
    return HttpResponse.json({ message: "Login failed" }, { status: 401 });
  }),
];
