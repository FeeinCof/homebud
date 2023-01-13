import classnames from "classnames/bind";
import style from "./Button.module.css";

const cx = classnames.bind(style);

interface Props {
  children: string;
  type: string;
}

const Button = ({ children, type }: Props) => {
  return <button className={cx("button", type)}>{children}</button>;
};

export default Button;
