import classNames from "classnames/bind";
import style from "./OverviewCard.module.css";
const cx = classNames.bind(style);
interface Props {
  days?: number;
  inches?: number;
  ibs?: number;
  content: string;
}

const OverviewCard = ({ days, inches, ibs, content }: Props) => {
  const pramsHandle = () => {
    if (days || days === 0) {
      return days > 0
        ? { title: days, value: "days" }
        : { title: days, value: "day" };
    }
    if (inches) return { title: inches, value: "inches" };
    if (ibs) return { title: ibs, value: "Ibs" };
  };
  return (
    <div className={cx("card")}>
      <div>
        <p className={cx("number")}>
          {pramsHandle()?.title}
          <span className={cx("string")}>{pramsHandle()?.value}</span>
        </p>
        <span className={cx("content")}>{content}</span>
      </div>
      <div className={cx("circle")}></div>
    </div>
  );
};

export default OverviewCard;
