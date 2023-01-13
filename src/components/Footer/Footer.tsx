import Link from "next/link";
import Image from "next/image";
import classnames from "classnames/bind";
import style from "./Footer.module.css";
import {
  home_icon,
  logo,
  mail_icon,
  phone_icon,
  social_icons,
  social_icons_gray,
  triangle_left,
} from "src/assets/icons/";
const cx = classnames.bind(style);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("informations-footer")}>
        <div className={cx("informations-inner")}>
          <h1 className={cx("informations-title")}>
            Signup to unlock news and
          </h1>
          <div className={cx("informations-form")}>
            <input type="email" placeholder="Email Address"></input>
            <button>
              Send &nbsp;
              <Image src={triangle_left} alt="icon" />
            </button>
          </div>
        </div>
        <div className={cx("informations-inner")}>
          <p className="t-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            efficitur dictum nisi, a viverra neque.
          </p>
          <div className={cx("icons-group")}>
            <div className="pointer">
              <Image src={social_icons} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className={cx("about-footer")}>
        <div className={cx("about-wrapper")}>
          <div
            className={cx("about-inner")}
            style={{
              transform: "translateY(-45px)",
            }}
          >
            <div className={cx("about-item")}>
              <Image src={logo} alt="icon" />
            </div>
            <div className={cx("about-item")}>
              <p>
                Lorem Ipsum description of what TheHomeBud is or some kind of
                inspirational statmenet about the brand.
              </p>
            </div>
            <div className={cx("about-item")}>
              <Image src={social_icons_gray} alt="icon" width={169} />
            </div>
          </div>
          <div className={cx("about-inner")}>
            <div className={cx("about-item")}>
              <p className="t-bold">Product</p>
            </div>
            <div className={cx("about-item")}>
              <Link href="">Home</Link>
            </div>
            <div className={cx("about-item")}>
              <Link href="">About</Link>
            </div>
            <div className={cx("about-item")}>
              <Link href="">Products</Link>
            </div>
          </div>
          <div className={cx("about-inner")}>
            <div className={cx("about-item")}>
              <p className="t-bold">Company</p>
            </div>
            <div className={cx("about-item")}>
              <Link href="">Affiliate Member</Link>
            </div>
            <div className={cx("about-item")}>
              <Link href="">FAQ</Link>
            </div>
            <div className={cx("about-item")}>
              <Link href="">Marketplace</Link>
            </div>
          </div>
          <div className={cx("about-inner")}>
            <div className={cx("about-item")}>
              <p className="t-bold">Sitemap</p>
            </div>
            <div className={cx("about-item")}>
              <Link href="">About</Link>
            </div>
            <div className={cx("about-item")}>
              <Link href="">Careers</Link>
            </div>
            <div className={cx("about-item")}>
              <Link href="">Press</Link>
            </div>
          </div>
          <div className={cx("about-inner")}>
            <div className={cx("about-item")}>
              <p className="t-bold">Service</p>
            </div>
            <div className={cx("about-item")}>
              <Image
                src={home_icon}
                alt="icon"
                className={cx("service-icon")}
              />
              <Link href="">7755 Alabama Ave, Canoga Park CA 91304</Link>
            </div>
            <div className={cx("about-item")}>
              <Image
                src={phone_icon}
                alt="icon"
                className={cx("service-icon")}
              />
              <Link href="">+1201928710</Link>
            </div>
            <div className={cx("about-item")}>
              <Image
                src={mail_icon}
                alt="icon"
                className={cx("service-icon")}
              />
              <Link href="">Ourstudio@hello.com</Link>
            </div>
          </div>
        </div>
        <div className={cx("footer-bottom")}>
          <div>
            <small>© 2023 The Bud Grower.</small>
          </div>
          <div>
            <Link href="">
              <small>Privacy Policy</small>
            </Link>
            <Link href="">
              <small>Terms & Conditions</small>
            </Link>
            <Link href="">
              <small>Shipping & Returns</small>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
