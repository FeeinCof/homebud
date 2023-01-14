import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames/bind";
import style from "./Navbar.module.css";
import { Button } from "src/components";
import { logo, menu_icon, remove } from "src/assets/icons";
const cx = classnames.bind(style);

const Navbar = () => {
  const [isNavbarShow, setNavbar] = useState(false);
  const navbarShow = () => {
    setNavbar(true);
  };
  const hideNavbar = () => {
    setNavbar(false);
  };
  return (
    <>
      <nav className={cx("navbar", { active: isNavbarShow })}>
        {isNavbarShow && (
          <Image
            src={logo}
            alt="logo"
            width={160}
            style={{
              margin: "8px",
            }}
          />
        )}
        <div className={cx("group-items")}>
          <Link href="">
            <div className={cx("group-item")}>Seeds</div>
          </Link>
          <Link href="">
            <div className={cx("group-item")}>FQA</div>
          </Link>
          <Link href="">
            <div className={cx("group-item")}>Your Grow</div>
          </Link>
          <Link href="">
            <div className={cx("group-item")}>Who We Are</div>
          </Link>
        </div>
        <div className={cx("group-items", "group-buttons")}>
          <Button type="brown">Sign Up For Free</Button>
          <span>&nbsp;&nbsp;</span>
          <Button type="outline-brown">Login</Button>
        </div>
        <div className={cx("close-navbar")} onClick={() => hideNavbar()}>
          <Image src={remove} alt="icon" />
        </div>
      </nav>
      <button className={cx("menu-button")} onClick={() => navbarShow()}>
        <Image width="24px" src={menu_icon} alt="icon" />
      </button>
    </>
  );
};

export default Navbar;
