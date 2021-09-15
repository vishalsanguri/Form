import React from "react";
import { ErrorMessage, useField } from "formik";
export default function Text({ label, ...props }) {
  let [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label> <br />
      <input
        className={`inputdiv  ${meta.error && meta.touched && "change"}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="errordiv" />
    </div>
  );
}
