// import { Inter } from "@next/font/google";
import classnames from "classnames/bind";
import type { ReactElement } from "react";
import DefaultLayout from "../src/layouts/DefaultLayout/DefaultLayout";
import style from "styles/Home.module.css";
import { CardItem, SelectCustom } from "@src/components";
import Image from "next/image";
import { cart, inscrease_icon, note_icon } from "@src/assets/icons";
const cx = classnames.bind(style);
const Home = () => {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("home")}>
          <h2 className={cx("title")}>
            We Have Selected Only the Highest Quality Seeds for You to <br />{" "}
            Grown With Us
          </h2>
          <p className={cx("content")}>
            Our growing partners have selected the highest quality seeds
            specifically designed to deliver large yields and a faultless grow.
            Our comprehensive seed selection was hand selected to assure that of
            seeds are of the beest quality and have been developed to deliver
            the pest quality end result. There are many lower quality seeds out
            there but we are growing these for you so we only use the best
            seeds.
          </p>
          <div className={cx("items-container")}>
            <nav className={cx("filter-bar")}>
              <div className={cx("filter-inner")}>
                <span>5 Items</span>
                &nbsp;
                <div className={cx("select-width")}>
                  <SelectCustom options={["All", "sth"]} />
                </div>
              </div>
              <div className={cx("filter-inner")}>
                <span>Sort By</span>
                &nbsp;
                <div className={cx("select-width")}>
                  <SelectCustom options={["Lasted", "Newest"]} />
                </div>
                &nbsp; &nbsp;
                <Image src={inscrease_icon} width={12} alt="icon" />
                &nbsp; &nbsp;
                <Image src={cart} width={40} alt="icon" />
              </div>
            </nav>
            <nav className={cx("items-group")}>
              <div className={cx("items-double")}>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
              </div>
              <div className={cx("items-double")}>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
              </div>
            </nav>
            <nav className={cx("items-group")}>
              <div className={cx("items-double")}>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
              </div>
              <div className={cx("items-double")}>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
                <div className={cx("item")}>
                  <CardItem
                    img="weed1.jpeg"
                    title="Big Devil Autoflower Cannabis Seeds"
                    rate={5}
                    content="Booming, powerful weed in just 6 weeks."
                    averagePlantYield={5}
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className={cx("banner")}>
          <div className={cx("banner-inner")}>
            <p className={cx("banner-head")}>OVER</p>
            <h1 className={cx("banner-middle")}>50</h1>
            <h2 className={cx("banner-bottom")}>Seeds to choose from</h2>
            <small>(new ones are being added every week)</small>
          </div>
          <div className={cx("banner-inner")}>
            <p className={cx("banner-head")}>GROW UP TO</p>
            <h1 className={cx("banner-middle")}>36oz</h1>
            <h2 className={cx("banner-bottom")}>OF CANNABIS AS ONE TIME</h2>
          </div>
          <div className={cx("banner-inner")}>
            <p className={cx("banner-head")}>IN AS LITTLE AS</p>
            <h1 className={cx("banner-middle")}>70-90</h1>
            <h2 className={cx("banner-bottom")}>DAYS</h2>
          </div>
        </div>
        <h1
          style={{
            margin: "42px 0",
          }}
        >
          Testimonials
        </h1>
        <div className={cx("testimonials-group")}>
          <div className={cx("testimonials-item")}>
            <div className={cx("note-icon")}>
              <Image src={note_icon} alt="icon" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, conseter sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero.
            </p>
            <p className={cx("tes-name")}>Diane</p>
          </div>
          <div className={cx("testimonials-item")}>
            <div className={cx("note-icon")}>
              <Image src={note_icon} alt="icon" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, conseter sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero.
            </p>
            <p className={cx("tes-name")}>Diane</p>
          </div>
          <div className={cx("testimonials-item")}>
            <div className={cx("note-icon")}>
              <Image src={note_icon} alt="icon" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, conseter sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero.
            </p>
            <p className={cx("tes-name")}>Diane</p>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(Home: ReactElement) {
  return <DefaultLayout>{Home}</DefaultLayout>;
};

export default Home;
