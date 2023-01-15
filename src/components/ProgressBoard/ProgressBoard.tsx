import classNames from "classnames/bind";
import style from "./ProgressBoard.module.css";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
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

  return (
    <div className={cx("progress-board")}>
      <ul>
        {props.map((item, index) => (
          <li key={index.toString()}>
            <p>{item.name}</p>
            <div
              style={{
                backgroundColor: colors[index],
                width: `${item.progress}%`,
              }}
              className={cx("progress-bar")}
            ></div>
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
      </div>
    </div>
  );
};

export default ProgressBoard;
