import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResetPass from "../../../components/layout/resetpassLayout/ResetPass";
import CForm from "../../../components/common/form/CForm";
import { CToast } from "../../../components/common/toast/CToast";

import emailjs from "emailjs-com";
import { routes } from "../../../routes/routes";
import { handleGetLinkService } from "../../../services/userService";

function ResetPassword() {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
  });

  const handleSendCode = async () => {
    try {
      setIsLoading(true);
      const { data: linkData } = await handleGetLinkService(data.email);
      if (linkData.api_token) {
        const templateParams = {
          to_email: data.email,
          reset_link:
            import.meta.env.VITE_RESET_PASS_LINK + `/${linkData.api_token}`,
        };
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setIsLoading(false);

        CToast("success", "تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setIsLoading(false);
    }
  };

  const fields = [
    {
      label: "البريد الإلكتروني",
      type: "email",
      name: "email",
      value: data.email,
      required: true,
    },
    {
      sm: 12,
      type: "button",
      doSubmit: true,
      label: "إرسال الرابط",
      variant: "contained",
      loading: loading,
    },
    {
      sm: 12,
      type: "button",
      label: "الرجوع",
      variant: "outlined",
      onClick: () => navigate(routes.loginRoute),
    },
  ];

  return (
    <ResetPass>
      <CForm
        fields={fields}
        setData={setData}
        data={data}
        title="إعادة تعيين كلمة المرور"
        subTitle="أدخل بريدك الإلكتروني لإرسال رابط التعيين"
        doSubmit={handleSendCode}
      />
    </ResetPass>
  );
}

export default ResetPassword;
