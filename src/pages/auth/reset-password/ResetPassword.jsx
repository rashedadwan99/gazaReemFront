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
import ResetPass from "../../../components/layout/resetpassLayout/ResetPass";

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
      label: "email",
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
          label: "send",
          variant: "contained",
        },
        {
          sm: 6,
          label: "back",
          variant: "outlined",
          onClick: () => {
            navigate(routes.loginRoute);
          },
        },
      ],
    },
  ];

  return (
    <ResetPass>
      <CForm
        fields={fields}
        setData={setData}
        data={data}
        title="r-pass"
        subTitle="enter_email"
        doSubmit={handleSendCode}
      />
    </ResetPass>
  );
}

export default ResetPassword;
