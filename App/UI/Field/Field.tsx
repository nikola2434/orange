import { forwardRef } from "react";
import { IField } from "./field.interface";
import style from "./Field.module.scss";

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, ...rest }, ref) => {
    return (
      <div className={style.field}>
        <input {...rest} ref={ref} required={true} />
        <span className={style.placeholder}>{placeholder}</span>
        {error?.message && <div className={style.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
