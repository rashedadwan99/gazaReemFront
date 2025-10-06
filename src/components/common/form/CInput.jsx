import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";

function CInput({ type = "text", rows, value, slotProps = {}, ...rest }) {
  const isArabic = useSelector((state) => state.language.isArabic);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <FormControl fullWidth>
      <TextField
        value={value}
        {...rest}
        type={type === "password" && !showPassword ? "password" : "text"}
        autoComplete="true"
        multiline={!!rows}
        rows={rows ? 5 : undefined}
        sx={{
          direction: isArabic ? "rtl" : "ltr",

          "& .MuiInputLabel-root": {
            left: isArabic ? "auto" : 0,
            right: isArabic ? "25px" : "auto",
            transformOrigin: isArabic ? "top right" : "top left",
            textAlign: isArabic ? "right" : "left",
          },

          "& .MuiInputLabel-shrink": {
            left: isArabic ? "auto" : 0,
            right: isArabic ? "30px" : "auto",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            textAlign: isArabic ? "right" : "left",
            "& legend": {
              textAlign: isArabic ? "right" : "left",
              direction: isArabic ? "rtl" : "ltr",
            },
          },

          "& input": {
            textAlign: isArabic ? "right" : "left",
          },
        }}
        slotProps={{
          ...slotProps,
          inputLabel: {
            ...(slotProps.inputLabel || {}),
          },
        }}
        variant="outlined"
        InputProps={{
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    </FormControl>
  );
}

export default CInput;
