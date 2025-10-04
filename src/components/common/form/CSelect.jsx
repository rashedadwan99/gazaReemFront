import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import Translation from "../translation/Translation";

export default function CSelect({
  label,
  path,
  options = [],
  required,
  disabled = false,
  f,
  defaultOption = null,
  onChange,
  customOnChange,
  ...rest
}) {
  const { t } = useTranslation();

  const handleChange = (e) => {
    // نداء دالة customOnChange لو كانت موجودة
    if (typeof customOnChange === "function") {
      customOnChange(e);
    }

    // نداء دالة onChange الأصلية لو كانت موجودة
    if (typeof onChange === "function") {
      onChange(e);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required={required} disabled={disabled}>
        <InputLabel id={`select-${label}`}>{t(label)}</InputLabel>
        <Select
          labelId={`select-${label}`}
          id={`select-${label}`}
          label={t(label)}
          onChange={handleChange}
          {...rest}
        >
          {defaultOption && (
            <MenuItem value="">
              {typeof defaultOption === "string"
                ? t(defaultOption)
                : defaultOption}
            </MenuItem>
          )}

          {options.map((o, i) => (
            <MenuItem key={i} value={path ? o[path] : o._id}>
              {f?.translate ? <Translation object={o} path="name" /> : o.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
