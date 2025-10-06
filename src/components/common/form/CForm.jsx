import { memo, useCallback } from "react";
import { Col, Form, Row } from "react-bootstrap";
import CInput from "./CInput";
import "./form.css";
import { checkRequiredFields } from "../../../validation/validation";

import { useTranslation } from "react-i18next";
import CButton from "../button/CButton";
import useToast from "../../../hooks/useToast";
import { useSelector } from "react-redux";
import CSelect from "./CSelect";
import { Checkbox } from "@mui/material";
import CPhoneInput from "./CPhone";
const CForm = memo(
  ({ data, fields, setData, loading, title, doSubmit, subTitle }) => {
    const { t } = useTranslation();
    const CToast = useToast();
    const handleSubmit = useCallback(
      (event) => {
        event.preventDefault();
        const isAllFilled = checkRequiredFields(fields, data);

        if (isAllFilled) doSubmit(event);
        else CToast("error", "fill_req");
      },
      [data, fields]
    );
    const onChange = useCallback(
      (e) => {
        const { name, value, type, checked } = e.target;
        const finalValue = type === "checkbox" ? checked : value.trimLeft();
        setData((prevData) => ({ ...prevData, [name]: finalValue }));
      },
      [setData]
    );
    const { isArabic } = useSelector((state) => state.language);
    return (
      <Form
        noValidate
        onSubmit={handleSubmit}
        style={isArabic ? { direction: "rtl" } : {}}
      >
        <h3>{t(title)}</h3>
        <span className="sub_title">{t(subTitle)}</span>
        {fields?.map((f, i) => {
          return f.buttons ? (
            <Row className="justify-content-center" key={i}>
              <Row className="justify-content-between">
                {f?.buttons?.map((b, i) => {
                  if (!b.label) return;
                  return b.isOneBtn ? (
                    <Row key={b.label}>
                      <CButton
                        // style={{ width: "auto" }}
                        onClick={b.type === "submit" ? handleSubmit : b.onClick}
                        variant={b.variant}
                        loading={b.type === "submit" ? loading : b.loading}
                        label={b.label}
                      />
                    </Row>
                  ) : (
                    <CButton
                      key={i}
                      // style={{ width: "auto" }}
                      onClick={b.type === "submit" ? handleSubmit : b.onClick}
                      variant={b.variant}
                      loading={b.type === "submit" ? loading : b.loading}
                      disabled={b.type === "submit" ? loading : b.loading}
                      label={b.label}
                    />
                  );
                })}
              </Row>
            </Row>
          ) : (
            <Row className="mt-2 justify-content-center" key={i}>
              {f.type === "select" ? (
                <Col sm={f?.sm ?? 12} className="my-2">
                  <CSelect
                    label={t(f?.label)}
                    f={f}
                    id={f?.id}
                    path={f?.path}
                    disabled={f?.disabled}
                    value={data[f?.name]}
                    name={f?.name}
                    required={f?.required}
                    type={f?.type}
                    placeholder={t(f?.placeholder)}
                    icon={f?.icon}
                    onChange={onChange}
                    min={f?.min}
                    max={f?.max}
                    onClick={f?.onClick}
                    validate={f?.validate}
                    options={f?.options}
                    defaultOption={f?.defaultOption}
                    customOnChange={f?.customOnChange}
                  />
                </Col>
              ) : f.type === "checkbox" ? (
                <div className="d-flex align-items-center gap-2 my-2" key={i}>
                  <Checkbox
                    checked={data[f?.name]}
                    onChange={onChange}
                    value={data[f?.name]}
                    name={f?.name}
                    size="small"
                    disableRipple
                    sx={{
                      padding: 0,
                      color: "#666",
                      "&.Mui-checked": {
                        color: "#0d6efd",
                      },
                      "&:hover": {
                        backgroundColor: "transparent", // لا يوجد تأثير عند التحويم
                      },
                    }}
                  />
                  <label
                    htmlFor={f?.name}
                    className="checkbox-label"
                    onClick={f?.onClick}
                  >
                    {t(f?.label)}
                  </label>
                </div>
              ) : f.type === "tel" ? (
                <Col key={i} sm={f?.sm ?? 12} className="my-2">
                  <CPhoneInput
                    label={t(f?.label)}
                    name={f?.name}
                    value={data[f?.name]}
                    onChange={onChange}
                    required={f?.required}
                  />
                </Col>
              ) : f.type === "button" ? (
                <Col key={i} sm={f?.sm ?? 12} className="my-1">
                  <CButton
                    style={{ width: f.width ? "auto" : "100%" }}
                    onClick={f.doSubmit ? handleSubmit : f.onClick}
                    variant={f.variant}
                    loading={f.loading}
                    disabled={f.loading}
                    label={f.label}
                  />
                </Col>
              ) : (
                <Col key={i} sm={f?.sm ?? 12} className="my-2">
                  <CInput
                    label={t(f?.label)}
                    id={f?.id}
                    rows={f?.rows}
                    value={data[f?.name]}
                    name={f?.name}
                    required={f?.required}
                    type={f?.type}
                    placeholder={t(f?.placeholder)}
                    icon={f?.icon}
                    onChange={onChange}
                    min={f?.min}
                    max={f?.max}
                    onClick={f?.onClick}
                    validate={f?.validate}
                    disabled={f?.disabled}
                  />
                </Col>
              )}
            </Row>
          );
        })}
      </Form>
    );
  }
);

export default CForm;
