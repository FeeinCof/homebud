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

const Header = () => {
  const categoryRef = useRef(null);
  const [isBannerShow, setBanner] = useState(true);
  const [isHeaderFixed, setHeader] = useState(false);
  const closeBanner = (): void => {
    setBanner(false);
  };
  const categoryNavScrolling = (direct: string) => {
    if (direct === "right") categoryRef.current.scrollLeft += 170;
    if (direct === "left") categoryRef.current.scrollLeft -= 170;
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
      <header className={cx("wrapper", { fixed: isHeaderFixed })}>
        <div className={cx("inner")}>
          <Image className={cx("logo")} src={logo} alt="Logo" />
          <Navbar />
        </div>
        <nav className={cx("category-navbar")}>
          <div
            className={cx("button-scroll-left")}
            onClick={() => categoryNavScrolling("left")}
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
            <Link href="">
              <span className={cx("category-item")}>
                Northern Light Automatic
              </span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Royal Dwarf</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Special Queen 1</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Quick One</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>White Widow</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Easy Start</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Amnesia Haze</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>
                Royal Gorilla Automatic
              </span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Crabgrass</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Lambsquarters</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Chickweed</span>
            </Link>
            <Link href="">
              <span className={cx("category-item")}>Shepherd's Purse</span>
            </Link>
          </div>
          <div
            className={cx("button-scroll-right")}
            onClick={() => categoryNavScrolling("right")}
          >
            <Image src={arrow_right_solid} alt="icon" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
