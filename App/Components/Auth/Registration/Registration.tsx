import { FC } from "react";
import Meta from "../../Meta/Meta";
import style from "./Registration.module.scss";
import RegistrationFields from "./RegistrationFields/RegistrationFields";

const Registration: FC = () => {
  return (
    <Meta title="Регистрация">
      <div className={style.login}>
        <div className={style.fon}></div>
        <RegistrationFields />
      </div>
    </Meta>
  );
};

export default Registration;
