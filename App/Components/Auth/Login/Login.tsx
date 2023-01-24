
import { FC } from "react";
import style from "./Login.module.scss";
import Meta from "../../Meta/Meta";
import LoginFields from "./LoginFields/LoginFields";

const Login: FC = () => {
  return (
    <Meta title="Вход">
      <div className={style.login}>
        <div className={style.fon}></div>
        <LoginFields />
      </div>
    </Meta>
  );
};

export default Login;
