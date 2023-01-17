import { arrow_down } from "@src/assets/icons";
import classNames from "classnames/bind";
import Image from "next/image";
import style from "./RecentActivity.module.css";
const cx = classNames.bind(style);

interface ObjectProps {
  time: number;
  content: string;
}

interface Props {
  props: ObjectProps[];
}

const RecentActivity = ({ props }: Props) => {
  return (
    <div className={cx("recent-activity")}>
      <div className={cx("header")}>
        <div>
          <span>Recent &nbsp;</span>
          <Image src={arrow_down} alt="icon" width={12} />
        </div>
      </div>
      <div className={cx("body")}>
        <ul>
          {props.map((item, index) => (
            <li key={index}>
              <span className={cx("time")}>
                {item.time} {item.time > 0 ? "days" : "day"} ago
              </span>
              <p className={cx("content")}>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;
