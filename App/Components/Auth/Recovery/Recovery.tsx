import { FC } from "react";
import Meta from "../../Meta/Meta";
import style from "./Recovery.module.scss";
import RecoveryFields from "./RecoveryFields/RecoveryFields";

const Recovery: FC = () => {
  return (
    <Meta title="Восстановление">
      <div className={style.recovery}>
        <div className={style.fon} />
        <RecoveryFields />
      </div>
    </Meta>
  );
};

export default Recovery;
