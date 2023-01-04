import { FC } from "react";
import style from "./Heading.module.scss";

interface IHeadingProps {
  title: string;
}

const Heading: FC<IHeadingProps> = ({ title }) => {
  return <div className={style.heading}>{title}</div>;
};

export default Heading;
