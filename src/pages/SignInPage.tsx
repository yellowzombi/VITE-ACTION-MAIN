import { zodResolver } from "@hookform/resolvers/zod";
import { postLogin } from "@src/apis/fetch";
import SignInPageView from "@src/components/SignInPage";
import { TLoginForm, loginSchema } from "@src/utils/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthStore } from "@src/utils/store/authStore";

function SignInPage() {
  const { setToken } = useAuthStore();
  // 폼 상태 관리 및 유효성 검사 로직
  const signInForm = useForm<TLoginForm>({
    resolver: zodResolver(loginSchema),
  });
  // 로그인 버튼 클릭 시 호출될 함수
  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    const currentUserData = await postLogin(data);
    await setToken(currentUserData.token);
    await alert("로그인 성공.");
    console.log("onSubmit : ", currentUserData);
  };

  // 컴포넌트 렌더링
  return <SignInPageView signInForm={signInForm} onSubmit={onSubmit} />;
}

export default SignInPage;
