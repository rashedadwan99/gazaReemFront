import { useState } from "react";
import CForm from "../../../components/common/form/CForm";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { CToast } from "../../../components/common/toast/CToast";
import {
  sendResetLinkService,
  verifyResetCodeAndSetPasswordService,
} from "../../../services/userService";
import ResetPass from "../../../components/layout/resetpassLayout/ResetPass";

function ResetPassword() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    password: "",
  });

  const handleSendCode = async () => {
    try {
      await sendResetLinkService(data.password);
      CToast("success", "Code sent to your password");
    } catch (err) {
      CToast("error", err.response?.data?.message || "Failed to send code");
    }
  };

  const fields = [
    {
      label: "password",
      type: "password",
      name: "password",
      value: data.password,
      required: true,
    },
    {
      sm: 12,

      type: "button",
      doSubmit: true,
      label: "save",
      variant: "contained",
    },
    {
      sm: 12,

      type: "button",
      doSubmit: true,
      label: "r-s-code",
      variant: "outlined",
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
