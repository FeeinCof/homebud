import classNames from "classnames/bind";
import style from "./ProgressBoard.module.css";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const cx = classNames.bind(style);

interface ObjectProps {
  name: string;
  progress: number;
}

interface Props {
  props: ObjectProps[];
}

const ProgressBoard = ({ props }: Props) => {
  const colors: string[] = ["#5B73E8", "#50A5F1", "#53CB9F", "#F1B44C"];
  var strokeWidth = 75;
  var average: number = 0;
  for (let item of props) {
    average += item.progress;
  }
  return (
    <div className={cx("progress-board")}>
      <ul>
        {props.map((item, index) => (
          <li key={index.toString()}>
            <p>{item.name}</p>
            <Tippy content={`${item.progress}%`}>
              <div
                style={{
                  backgroundColor: colors[index],
                  width: `${item.progress}%`,
                }}
                className={cx("progress-bar")}
              ></div>
            </Tippy>
          </li>
        ))}
      </ul>
      <div className={cx("wrapper")}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          {props.map((item, index) => (
            <ProgressCircle
              strokeWidth={(strokeWidth -= 10)}
              color={colors[index]}
              progressValue={item.progress}
              key={index}
            />
          ))}
        </svg>
        <span>{`${average / props.length}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBoard;
