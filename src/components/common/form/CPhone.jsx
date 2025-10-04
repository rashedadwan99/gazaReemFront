import React from "react";
import { Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // يمكنك تخصيصها لاحقًا
import "./cphone.css"; // لو أردت تخصيص إضافي

const CPhoneInput = ({ name, value, onChange, required, label }) => {
  return (
    <Row className="d-flex flex-column">
      {label && <label>{label}</label>}
      <PhoneInput
        country={"jo"} // الدولة الافتراضية
        value={value}
        onChange={(phone) =>
          onChange({ target: { name, value: phone, type: "tel" } })
        }
        inputProps={{
          name,
          required,
          autoFocus: false,
        }}
        enableSearch
        specialLabel=""
      />
    </Row>
  );
};

export default CPhoneInput;
