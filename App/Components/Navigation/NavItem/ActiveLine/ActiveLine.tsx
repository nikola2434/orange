import { FC } from "react";
import { motion } from "framer-motion";
import style from "./ActiveLine.module.scss";

export const ActiveLine: FC = () => {
  return (
    <div className={style.active_line}>
      <motion.div className={style.line} layoutId="activeLine" />
    </div>
  );
};
