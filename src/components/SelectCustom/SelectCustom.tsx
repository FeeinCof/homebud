import { useState } from "react";
import classnames from "classnames/bind";
import style from "./SelectCustom.module.css";
const cx = classnames.bind(style);
interface Props {
  options: string[];
}

const SelectCustom = ({ options }: Props) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <form>
      <select
        className={cx("sellect-box")}
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SelectCustom;
