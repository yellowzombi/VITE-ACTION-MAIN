import { z } from "zod";

export type TRegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// 회원가입 폼 스키마
export const registerSchema = z
  .object({
    firstName: z.string().min(1, "닉네임을 입력해주세요."),
    lastName: z.string().min(1, "닉네임을 입력해주세요."),
    email: z.string().email("유효하지 않은 이메일 주소입니다."),
    password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type TLoginForm = {
  email: string;
  password: string;
};

// 로그인 폼 스키마
export const loginSchema = z.object({
  email: z.string().email("유효하지 않은 이메일 주소입니다."),
  password: z.string().min(6, "비밀번호는 6자 이상이어야 합니다."),
});
