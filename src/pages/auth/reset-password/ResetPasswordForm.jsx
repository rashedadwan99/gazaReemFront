import { useState } from "react";
import CForm from "../../../components/common/form/CForm";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { CToast } from "../../../components/common/toast/CToast";
import ResetPass from "../../../components/layout/resetpassLayout/ResetPass";
import { changePassService } from "../../../services/userService";

function ResetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { api_token } = useParams();
  const [data, setData] = useState({
    password: "",
    api_token: api_token,
  });

  const handleSendCode = async () => {
    try {
      setLoading(true);
      const { data: responseData } = await changePassService(data);
      CToast("success", responseData.message);

      setLoading(false);
      navigate(routes.loginRoute, { replace: true });
    } catch (err) {
      setLoading(false);
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
      loading: loading,
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
