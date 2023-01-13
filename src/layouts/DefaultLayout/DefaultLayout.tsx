import classnames from "classnames/bind";
import style from "./DefaultLayout.module.css";
import { Header, Footer } from "src/components";
const cx = classnames.bind(style);

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Header />
      <main className={cx("main")}>{children}</main>
      <Footer />
    </>
  );
}
