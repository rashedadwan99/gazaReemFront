import { useState } from "react";
import CForm from "../../../components/common/form/CForm";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { CToast } from "../../../components/common/toast/CToast";
import ResetPass from "../../../components/layout/resetpassLayout/ResetPass";
import { changePassService } from "../../../services/userService";

function ResetPassword() {
  const navigate = useNavigate();
  const { api_token } = useParams();
  const [data, setData] = useState({
    password: "",
    api_token: api_token,
  });

  const handleSendCode = async () => {
    try {
      const { responseData } = await changePassService(data);
      CToast("success", responseData.mesage);
    } catch (err) {
      // CToast("error", err.response?.data?.message || "Failed to send code");
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
