import React, { useState } from "react";
import AuthLayout from "../../../components/layout/auth/AuthLayout";
import CForm from "../../../components/common/form/CForm";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { CToast } from "../../../components/common/toast/CToast";
import {
  sendResetCodeService,
  verifyResetCodeAndSetPasswordService,
} from "../../../services/userService";

function ResetPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    email: "",
  });

  const handleSendCode = async () => {
    try {
      await sendResetCodeService(data.email);
      CToast("success", "Code sent to your email");
    } catch (err) {
      CToast("error", err.response?.data?.message || "Failed to send code");
    }
  };

  const fields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      value: data.email,
      required: true,
    },
    {
      buttons: [
        {
          sm: 6,

          type: "submit",
          label: "Send Code",
          variant: "contained",
        },
        {
          sm: 6,
          label: "Back",
          variant: "outlined",
          onClick: () => {
            navigate(routes.loginRoute);
          },
        },
      ],
    },
  ];

  return (
    <AuthLayout>
      <CForm
        fields={fields}
        setData={setData}
        data={data}
        title="Reset Password"
        doSubmit={handleSendCode}
      />
    </AuthLayout>
  );
}

export default ResetPassword;
