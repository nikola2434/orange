import Image from "next/image";
import { FC } from "react";
import style from "./Login.module.scss";
import fon from "../../../../public/lemon-fruit-pattern.png";
import Meta from "../../Meta/Meta";

const Login: FC = () => {
  return (
    <Meta title="Вход">
      <div className={style.login}>
        <Image src={fon} draggable={false} alt="" />
      </div>
    </Meta>
  );
};

export default Login;
