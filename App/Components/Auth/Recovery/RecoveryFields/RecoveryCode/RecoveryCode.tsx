import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import register from "../../../../../../pages/auth/register";
import Button from "../../../../../UI/Button/Button";
import Field from "../../../../../UI/Field/Field";
import style from "./RecoveryCode.module.scss";

interface ICode {
  code: string;
}

const RecoveryCode: FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICode>();
  const onSubmit: SubmitHandler<ICode> = (data) => {
    alert(data.code);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.code}>
      <Field
        placeholder="Введите код"
        error={errors.code}
        {...register("code", {
          required: "Введите код!",
        })}
      />
      <Button>Восстановить</Button>
    </form>
  );
};

export default RecoveryCode;
