import { start } from "@src/assets/icons";
import classnames from "classnames/bind";
import Image from "next/image";
import { ReactElement } from "react";
import style from "./CardItem.module.css";
const cx = classnames.bind(style);

interface Props {
  img: string;
  title: string;
  rate: number;
  content: string;
  averagePlantYield: number;
}

const CardItem = ({ img, title, rate, content, averagePlantYield }: Props) => {
  const rateStart = (param: number) => {
    let result: ReactElement[] = [];
    for (let i = 0; i < param; i++) {
      result.push(<Image src={start} alt="icon" key={i} />);
    }
    return result;
  };

  return (
    <div className={cx("card")}>
      <div
        className={cx("card-header")}
        style={{
          backgroundImage: `url(../../assets/images/${img})`,
        }}
      ></div>
      <div className={cx("card-body")}>
        <span className={cx("title")}>{title}</span>
        <div className={cx("rate")}>{rateStart(rate).map((a) => a)}</div>
        <span className={cx("content")}>{content}</span>
        <span className={cx("content-bottom")}>
          Average Plant Yield: {averagePlantYield}oz
        </span>
      </div>
    </div>
  );
};

export default CardItem;
