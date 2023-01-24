import Image from "next/image";
import { FC } from "react";
import lemon from "../../../public/lemon.png";
import Meta from "../Meta/Meta";
import style from "./Warning.module.scss";
import Link from "next/link";

const Warning: FC = () => {
  return (
    <Meta title="404">
      <div className={style.warning}>
        <div className={style.message}>
          <Link href="/">
            <Image src={lemon} alt="lemon" />
          </Link>
          <span>Страница не найдена </span>
        </div>
      </div>
    </Meta>
  );
};

export default Warning;
