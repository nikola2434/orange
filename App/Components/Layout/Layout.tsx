import { FC, ReactNode } from "react";
import { Navigation } from "../Navigation/Navigation";

import style from "./Layout.module.scss";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Navigation />
      {children}
    </div>
  );
};
