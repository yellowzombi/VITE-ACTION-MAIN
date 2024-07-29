import { zodResolver } from "@hookform/resolvers/zod";
import SignUpPageView from "@src/components/SignUpPage";
import { TRegisterForm, registerSchema } from "@src/utils/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { postRegister } from "@src/apis";

function SignUpPage() {
  // 폼 상태 관리 및 유효성 검사 로직
  const signUpForm = useForm<TRegisterForm>({
    resolver: zodResolver(registerSchema),
  });
  // 폼 제출 시 회원가입 요청
  const onSubmit: SubmitHandler<TRegisterForm> = async (data) => {
    await postRegister(data);
    await alert("회원가입 성공.");
  };
  return <SignUpPageView onSubmit={onSubmit} signUpForm={signUpForm} />;
}
export default SignUpPage;
