import { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames/bind";
import style from "./Header.module.css";
import { Navbar } from "src/components";
import {
  arrow_left,
  vans,
  arrow_right,
  close_button,
  logo,
  arrow_right_solid,
} from "src/assets/icons";
const cx = classnames.bind(style);

interface MutableRefObject<T> {
  current: T;
}

const Header = () => {
  const categoryRef = useRef<HTMLDivElement>(null);
  const [isBannerShow, setBanner] = useState(true);
  const [categoryItems, setCategoryItems] = useState([
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Northern Light Automatic",
    "Royal Dwarf",
  ]);
  const closeBanner = (): void => {
    setBanner(false);
  };
  const categoryNavScrolling = (value: number) => {
    if (categoryRef.current) {
      categoryRef.current.scrollLeft += value;
    }
  };
  return (
    <>
      {isBannerShow && (
        <div className={cx("banner")}>
          <Image className={cx("banner-icon")} src={arrow_left} alt="icon" />
          <p className="d-flex align-center">
            Never miss out on the next sale! &nbsp;
            <Image className={cx("banner-icon-vans")} src={vans} alt="icon" />
          </p>
          <div>
            <Image
              className={cx("banner-icon")}
              src={arrow_right}
              alt="icon"
              style={{ marginRight: "26px" }}
            />
            <Image
              src={close_button}
              alt="icon"
              onClick={() => closeBanner()}
              className={cx("banner-icon")}
            />
          </div>
        </div>
      )}
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <Image className={cx("logo")} src={logo} alt="Logo" />
          <Navbar />
        </div>
        <nav className={cx("category-navbar")}>
          <div
            className={cx("button-scroll-left")}
            onClick={() => categoryNavScrolling(-200)}
          >
            <Image
              src={arrow_right_solid}
              alt="icon"
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </div>
          <div className={cx("category-inner")} ref={categoryRef}>
            {categoryItems.map((item, index) => (
              <Link key={index.toString()} href="">
                <span className={cx("category-item")}>{item}</span>
              </Link>
            ))}
          </div>
          <div
            className={cx("button-scroll-right")}
            onClick={() => categoryNavScrolling(200)}
          >
            <Image src={arrow_right_solid} alt="icon" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
