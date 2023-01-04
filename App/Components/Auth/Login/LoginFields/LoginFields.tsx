import { FC } from "react";
import style from "./LoginFields.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { Logo } from "../../../Logo/Logo";
import Heading from "../../../../UI/Heading/Heading";
import Field from "../../../../UI/Field/Field";
import Button from "../../../../UI/Button/Button";
import Link from "next/link";
import { useAuthRedirect } from "./useAuthredirect";

export interface IFormLogin {
  email: string;
  password: string;
}

const LoginFields: FC = () => {
  useAuthRedirect();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormLogin>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    alert(data.email);
    alert(data.password);
  };

  return (
    <div className={style.container_login}>
      <div className={style.login}>
        <div className={style.logo}>
          <Logo />
        </div>

        <div className={style.container_heading}>
          <Heading title="Войти" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.field}>
            <Field
              placeholder="Логин"
              error={errors.email}
              {...register("email", {
                required: "Вы должны ввести свой Email!",
                pattern: {
                  value: /.+@.+\..+/i,
                  message: "Введите правильный Email!",
                },
              })}
            />
          </div>
          <div className={style.field}>
            <Field
              placeholder="Пароль"
              error={errors.password}
              type="password"
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Пароль должен быть больше 6 символов!",
                },
                required: "Введить свой пароль!",
              })}
            />
          </div>

          <Button>Войти</Button>
        </form>
        <div className={style.links}>
          <Link href={"recovery"} className={style.link}>
            Забыли пароль?
          </Link>
          <Link href={"register"} className={style.link}>
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginFields;
