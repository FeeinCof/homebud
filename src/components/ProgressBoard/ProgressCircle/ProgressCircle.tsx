// import { useState, useLayoutEffect } from "react";
import classNames from "classnames/bind";
import style from "./ProgressCircle.module.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const cx = classNames.bind(style);

interface Props {
  strokeWidth: number;
  progressValue: number;
  color: string;
}

let interval: any = undefined;

const ProgressCircle = ({ strokeWidth, progressValue, color }: Props) => {
  // const [progress, setProgress] = useState(0);
  //   useLayoutEffect(() => {
  //     interval = setInterval(() => {
  //       setProgress((prev) => prev + 1);
  //     }, 10);
  //   }, []);
  //   useLayoutEffect(() => {
  //     if (progress >= progressValue) {
  //       clearInterval(interval);
  //     }
  //   }, [progress]);
  return (
    <Tippy content={`${progressValue}%`}>
      <circle
        cx="73"
        cy="73"
        r={strokeWidth}
        style={{
          stroke: `${color}`,
          strokeDashoffset: `${472 + (472 * progressValue) / 100}`,
        }}
        className={cx("circle")}
      />
    </Tippy>
  );
};

export default ProgressCircle;
