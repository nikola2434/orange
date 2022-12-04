import Image from "next/image";
import { FC } from "react";
import style from "./Logo.module.scss";
import lemon from "../../../public/lemon.png";
import Link from "next/link";

export const Logo: FC = () => {
  return (
    <Link href={"/"} className={style.logo}>
      <div className={style.image}>
        <Image
          src={lemon}
          draggable={false}
          alt="logo"
          width={47}
          height={46}
        />
      </div>
      <div className={style.title}>Aпельсин</div>
    </Link>
  );
};
