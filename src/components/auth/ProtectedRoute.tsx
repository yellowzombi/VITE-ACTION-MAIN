import { useAuthStore } from "@src/utils/store/authStore";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

// 로그인이 되어있지 않은 경우, 로그인 페이지로 이동하는 라우팅 컴포넌트
const ProtectedRoute = ({
  element,
  showNav = true,
}: {
  element: JSX.Element;
  showNav?: boolean;
}) => {
  const { token } = useAuthStore();

  return token ? (
    <Layout showNav={showNav}>{element}</Layout>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default ProtectedRoute;
