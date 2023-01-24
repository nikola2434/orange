import { forwardRef, useState } from "react";
import { IField } from "./field.interface";
import style from "./Field.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, isDirty, type = "text", ...rest }, ref) => {
    const [isPassword, setIsPassword] = useState(type === "password");
    const changeHide = () => {
      setIsPassword((prev) => !prev);
    };
    return (
      <div className={style.field}>
        <input
          {...rest}
          ref={ref}
          type={isPassword ? "password" : "text"}
          required={true}
        />
        <span className={style.placeholder}>{placeholder}</span>
        {type === "password" && (
          <div className={style.icon}>
            {isPassword ? (
              <AiFillEye onClick={changeHide} />
            ) : (
              <AiFillEyeInvisible onClick={changeHide} />
            )}
          </div>
        )}
        {error?.message && <div className={style.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
