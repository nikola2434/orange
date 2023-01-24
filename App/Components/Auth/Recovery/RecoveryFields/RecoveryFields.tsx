import { FC, useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../../UI/Button/Button";
import Field from "../../../../UI/Field/Field";
import Heading from "../../../../UI/Heading/Heading";
import { Logo } from "../../../Logo/Logo";
import RecoveryCode from "./RecoveryCode/RecoveryCode";
import style from "./RecoveryFields.module.scss";

interface TFormRecovery {
  login: string;
}

const RecoveryFields: FC = () => {
  const [isCode, setIsCode] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((sec) => sec - 1);
      } else {
        setDisabled(false);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormRecovery>({ mode: "onChange" });

  const onSubmit: SubmitHandler<TFormRecovery> = (data) => {
    setSeconds(60);
    setDisabled(true);
    setIsCode(true);
    reset();
    alert(data.login);
  };
  return (
    <div className={style.container}>
      <div className={style.recovery}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.container_heading}>
          <Heading title="Восстановление" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <Field
            placeholder="Введите свою почту"
            error={errors.login}
            {...register("login", {
              required: "Введите свой email!",
              pattern: {
                value: /.+@.+\..+/i,
                message: "Введите правильный Email!",
              },
            })}
          />
          <span>
            Введите свой email. Мы отправим Вам на почту письмо с кодом
            восстановления.
          </span>
          <Button disabled={disabled}>
            Отправить {disabled ? `(${seconds})` : ""}
          </Button>
        </form>
        {isCode && <RecoveryCode />}
      </div>
    </div>
  );
};

export default RecoveryFields;
