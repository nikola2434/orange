import { FC } from "react";
import { Logo } from "../Logo/Logo";
import { navigationData } from "./navigation.data";
import style from "./Navigation.module.scss";
import { NavItem } from "./NavItem/NavItem";
import { AnimateSharedLayout } from "framer-motion";

export const Navigation: FC = () => {
  return (
    <div className={style.navigation}>
      <Logo />
      <div className={style.container_nav}>
        <div className={style.nav}>
          <AnimateSharedLayout>
            {navigationData.map((item) => (
              <NavItem link={item.link} title={item.title} key={item.link} />
            ))}
          </AnimateSharedLayout>
        </div>
        <NavItem key="auth" link="auth" title="Войти" />
      </div>
    </div>
  );
};
