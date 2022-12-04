import Link from "next/link";
import { FC } from "react";
import { INavData } from "../navigation.interface";
import style from "./NavItem.module.scss";

export const NavItem: FC<INavData> = ({ link, title }) => {
  return (
    <Link href={link} className={style.nav_item}>
      <div className={style.title}>{title}</div>
    </Link>
  );
};
