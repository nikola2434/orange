import Link from "next/link";
import { FC } from "react";
import { INavData } from "../navigation.interface";
import style from "./NavItem.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ActiveLine } from "./ActiveLine/ActiveLine";
import { orangeColor, yellowColor } from "../../../../constans";

export const NavItem: FC<INavData> = ({ link, title }) => {
  const { asPath } = useRouter();
  return (
    <motion.div
      className={style.item}
      initial={{ color: yellowColor }}
      animate={{ color: asPath === link ? orangeColor : yellowColor }}
    >
      <Link href={link} className={style.default}>
        <div className={style.title}>{title}</div>
      </Link>
      {asPath === link && <ActiveLine />}
    </motion.div>
  );
};
