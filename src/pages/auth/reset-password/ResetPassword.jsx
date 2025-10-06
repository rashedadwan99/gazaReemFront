import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ResetPass from "../../../components/layout/resetpassLayout/ResetPass";
import CForm from "../../../components/common/form/CForm";
import { CToast } from "../../../components/common/toast/CToast";

import emailjs from "emailjs-com";
import { routes } from "../../../routes/routes";

function ResetPassword() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
  });

  const handleSendCode = async () => {
    if (!data.email) {
      CToast("error", "يرجى إدخال البريد الإلكتروني");
      return;
    }

    const templateParams = {
      to_email: data.email,
      reset_link: import.meta.env.VITE_RESET_PASS_LINK,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      CToast("success", "تم إرسال رابط إعادة التعيين إلى بريدك الإلكتروني");
    } catch (err) {
      console.error("EmailJS Error:", err);
      CToast("error", "فشل في إرسال البريد الإلكتروني، حاول لاحقًا");
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
