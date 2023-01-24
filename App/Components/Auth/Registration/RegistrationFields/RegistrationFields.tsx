import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../../UI/Button/Button";
import Field from "../../../../UI/Field/Field";
import Heading from "../../../../UI/Heading/Heading";
import { Logo } from "../../../Logo/Logo";
import style from "./RegistrationFields.module.scss";

export interface IRegistration {
  name: string;
  password: string;
  email: string;
  repeatingPassword?: string;
}

const RegistrationFields: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IRegistration>({
    mode: "onChange",
  });

  const password = watch("password");
  const onSubmit: SubmitHandler<IRegistration> = (data) => {};

  return (
    <div className={style.fields}>
      <div className={style.login}>
        <div className={style.logo}>
          <Logo />
        </div>

        <div className={style.container_heading}>
          <Heading title="Регистрация" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <div className={style.field}>
            <Field
              placeholder="Введите свое имя"
              error={errors.name}
              {...register("name", {
                required: "Вы должны ввести своё имя!",
              })}
            />
          </div>
          <div className={style.field}>
            <Field
              placeholder="Введите свой email"
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
              placeholder="Придумайте пароль"
              error={errors.password}
              type={"password"}
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Пароль должен быть больше 6 символов!",
                },
                required: "Введить свой пароль!",
              })}
            />
          </div>
          <div className={style.field}>
            <Field
              placeholder="Повторите свой пароль"
              error={errors.repeatingPassword}
              type={"password"}
              {...register("repeatingPassword", {
                validate: (value) =>
                  value === password || "Пароли не совпадают!",
                required: "Повторите свой пароль",
              })}
            />
          </div>

          <Button>Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFields;
