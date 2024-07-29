import { TLoginForm, TRegisterForm } from "@src/utils/schema";

export const postRegister = async (registerData: TRegisterForm) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });
  console.log(response);

  return response.json();
};

export const postLogin = async (loginData: TLoginForm) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const responseData = await response.json();

    console.log("Logged in successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Login error:", error);
    throw error; // 에러를 다시 throw하여 호출하는 쪽에서 처리할 수 있게 함
  }
};
