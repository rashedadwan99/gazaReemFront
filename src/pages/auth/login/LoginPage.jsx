import { useState } from "react";
import AuthLayout from "../../../components/layout/auth/AuthLayout";
import { routes } from "../../../routes/routes";
import CForm from "../../../components/common/form/CForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginService, setUserToken } from "../../../services/userService";
import { toggleAuthAction } from "../../../redux/actions/userActions";
import "./loginPage.css";
import { CToast } from "../../../components/common/toast/CToast";

function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const doSubmit = async () => {
    try {
      {
        setIsLoading(true);
        const { data: user } = await loginService(data);
        if (user.isActive) {
          dispatch(toggleAuthAction());
          setUserToken(user.api_token);
          setIsLoading(false);
          CToast("success", "login-message");
        } else {
          CToast("error", "invalid_email_password");

          setIsLoading(false);
        }
      }
    } catch (ex) {
      setIsLoading(false);
    }
  };
  const navigate = useNavigate();
  const fields = [
    {
      label: "email",
      type: "email",
      name: "email",
      required: true,
    },

    {
      label: "password",
      type: "password",
      name: "password",
      required: true,
    },

    {
      sm: 12,
      label: "f-pass",
      type: "button",

      onClick: () => {
        navigate(routes.forgetPasswordGlobalRoute);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      variant: "text",
    },
    {
      sm: 12,
      label: "login",
      type: "button",

      variant: "contained",
      doSubmit: true,
    },
  ];

  return (
    <AuthLayout className="loginForm">
      <CForm
        fields={fields}
        data={data}
        setData={setData}
        title="login"
        loading={isLoading}
        doSubmit={doSubmit}
      />
    </AuthLayout>
  );
}

export default LoginPage;
