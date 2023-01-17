import { minute, plus } from "@src/assets/icons";
import classnames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";
import style from "./Question.module.css";
const cx = classnames.bind(style);

interface Props {
  title: string;
  content: string;
}

const Question = ({ title, content }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={cx("question", { active: isOpen })}>
      <div onClick={() => toggle()}>
        {isOpen ? (
          <Image src={minute} alt="icon" />
        ) : (
          <Image src={plus} alt="icon" width={15} />
        )}
        <p className={cx("title")}>{title}</p>
      </div>
      {isOpen && <p className={cx("content")}>{content}</p>}
    </div>
  );
};

export default Question;
