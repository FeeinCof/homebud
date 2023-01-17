import { use, useState } from "react";
import Image from "next/image";
import classnames from "classnames/bind";
import type { ReactElement } from "react";
import DefaultLayout from "src/layouts/DefaultLayout/DefaultLayout";
import style from "./Dashboard.module.css";
import {
  arrow_down,
  arrow_right,
  fb_bg,
  fb_icon,
  piter_icon,
  plus,
  twr_icon,
} from "@src/assets/icons";
import {
  OverviewCard,
  ProductsGroup,
  ProgressBoard,
  RecentActivity,
} from "@src/components";
const cx = classnames.bind(style);

interface Weed {
  name: string;
  active: boolean;
}

const Dashboard = () => {
  const [weeds, setWeed] = useState([
    { name: "Big Devil Autoflower Indica Seeds", active: true },
    { name: "Blueberry Autoflower Cannabis Seeds", active: false },
    { name: "Green Crack Freminized Cannabis Seeds", active: false },
    { name: "Critical Purple Autoflower Cannabis Seeds", active: false },
  ]);
  const [products, setProduct] = useState([
    {
      name: "Sativa Plants",
      products: [
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
      ],
    },
    {
      name: "Hybrid Plants",
      products: [
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
        {
          title: "Big Devil Autoflower Cannabis Plant",
          rate: 5,
          img: "weed2.jpg",
          content: "Booming, powerful weed in just 6 weeks.",
          averagePlantYield: 5,
        },
      ],
    },
  ]);
  const handleWeeds = (index: number) => {
    let newWeeds = weeds.map((weed, key) => {
      if (key == index) return { name: weed.name, active: true };
      return { name: weed.name, active: false };
    });
    setWeed(newWeeds);
  };
  return (
    <div className={cx("dashboard")}>
      <h1 className={cx("title")}>Dashboard</h1>
      <div className={cx("body-wrapper")}>
        <nav className={cx("weed-categories")}>
          {weeds.map(({ name, active }: Weed, index: number) => (
            <div
              className={cx("weed-item", {
                "weed-active": active,
              })}
              key={index.toString()}
              onClick={() => handleWeeds(index)}
            >
              <div className={cx("weed-item-image-wrapper")}>
                <div
                  style={{
                    backgroundImage: "url(../assets/images/weed_item.png)",
                  }}
                  className={cx("weed-item-image-inner")}
                ></div>
              </div>
              <span>{name}</span>
            </div>
          ))}
          <div className={cx("weed-item")}>
            <div className={cx("weed-item-image-wrapper", "plus")}>
              <Image src={plus} alt="icon" />
            </div>
            <span>Empty</span>
          </div>
          <div className={cx("weed-item")}>
            <div className={cx("weed-item-image-wrapper", "plus")}>
              <Image src={plus} alt="icon" />
            </div>
            <span>Empty</span>
          </div>
        </nav>
      </div>
      <div className={`container d-flex mt-34 ${cx("overview")}`}>
        <div className={cx("overview-card")}>
          <OverviewCard days={0} content="Approx. Days to Harvest" />
        </div>
        <div className={cx("overview-card")}>
          <OverviewCard days={17} content="Approx. Days to Harvest" />
        </div>
        <div className={cx("overview-card")}>
          <OverviewCard inches={58} content="Approx. Days to Harvest" />
        </div>
        <div className={cx("overview-card")}>
          <OverviewCard ibs={4.6} content="Approx. Days to Harvest" />
        </div>
      </div>
      <div className={`container d-flex mt-34`}>
        <div className={cx("wrapper")}>
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "19px",
            }}
          >
            Progress Board
          </h2>
          <div className={cx("progress-board")}>
            <ProgressBoard
              props={[
                {
                  name: "Days to Harvest",
                  progress: 85,
                },
                {
                  name: "Days to Delivery",
                  progress: 100,
                },
                {
                  name: "Plant size",
                  progress: 100,
                },
                {
                  name: "Plant weight",
                  progress: 85,
                },
              ]}
            />
          </div>
        </div>
        <div className={cx("wrapper")}>
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "19px",
            }}
          >
            Live Stream
          </h2>
          <div className={cx("live")}>
            <div className={cx("live-inner")}></div>
          </div>
        </div>
      </div>

      <div className={`mt-34 container d-flex`}>
        <div className={cx("wrapper")}>
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "19px",
            }}
          >
            Recent Activity
          </h2>
          <div className={cx("recent-activity")}>
            <RecentActivity
              props={[
                {
                  time: 3,
                  content:
                    "Plant drying starts (3-days). Size 58’ inches and weight 4.6 lbs",
                },
                {
                  time: 7,
                  content:
                    "Plant harvested. Plant’s size 58’inches and weight 4.9 lbs",
                },
                {
                  time: 8,
                  content:
                    "Plant ready for harvest. Plant is grown to 58’inches and gained 5.2 lbs of weight",
                },
                {
                  time: 10,
                  content:
                    "Blooming period. Seed’s growth is 53’inches and gained 4.4 lbs of weight",
                },
                {
                  time: 13,
                  content:
                    "Blooming period. Seed’s growth is 53’inches and gained weight of 3.2 lbs",
                },
                {
                  time: 18,
                  content:
                    "Blooming grow period. Seed’s growth is 53’inches and gained 2 lbs of wight",
                },
              ]}
            />
          </div>
        </div>
        <div className={cx("wrapper")}>
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "19px",
            }}
          >
            Share on Social Media
          </h2>
          <div className={cx("sharing")}>
            <div className={cx("sharing-header")}>
              <span>Monthly&nbsp;</span>
              <Image src={arrow_down} alt="icon" />
            </div>
            <Image src={fb_bg} alt="icon" />
            <h3
              className="t-bold"
              style={{
                marginTop: "19px",
                marginBottom: "8px",
              }}
            >
              Facebook -{" "}
              <span
                style={{
                  color: "#78808B",
                }}
              >
                1 share
              </span>
            </h3>
            <p
              style={{
                color: "#78808B",
                marginBottom: "26px",
              }}
            >
              Share your plant growth on social media.
            </p>
            <a
              href=""
              style={{
                fontSize: "18px",
              }}
            >
              Learn more <Image width={5} src={arrow_right} alt="icon" />
            </a>
            <div className={cx("sharing-social-medias")}>
              <div className={cx("social-media")}>
                <Image src={fb_icon} alt="icon" />
                <p className="t-18 mt-7">Facebook</p>
                <span
                  className="t-15"
                  style={{
                    color: "#78808B",
                  }}
                >
                  1 share
                </span>
              </div>
              <div className={cx("social-media")}>
                <Image src={twr_icon} alt="icon" />
                <p className="t-18 mt-7">Twitter</p>
                <span
                  className="t-15"
                  style={{
                    color: "#78808B",
                  }}
                >
                  0 share
                </span>
              </div>
              <div className={cx("social-media")}>
                <Image src={piter_icon} alt="icon" />
                <p className="t-18 mt-7">Piteres</p>
                <span
                  className="t-15"
                  style={{
                    color: "#78808B",
                  }}
                >
                  0 share
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-34 ${cx("body-wrapper")}`}>
        <nav className={cx("weed-categories")}>
          {weeds.map(({ name }: Weed, index: number) => (
            <div
              className={cx("weed-item")}
              key={index.toString()}
              onClick={() => handleWeeds(index)}
            >
              <div className={cx("weed-item-image-wrapper")}>
                <div
                  style={{
                    backgroundImage: "url(../assets/images/weed_item.png)",
                  }}
                  className={cx("weed-item-image-inner")}
                ></div>
              </div>
              <span>{name}</span>
            </div>
          ))}
          <div className={cx("weed-item")}>
            <div className={cx("weed-item-image-wrapper", "plus")}>
              <Image src={plus} alt="icon" />
            </div>
            <span>Empty</span>
          </div>
          <div className={cx("weed-item")}>
            <div className={cx("weed-item-image-wrapper", "plus")}>
              <Image src={plus} alt="icon" />
            </div>
            <span>Empty</span>
          </div>
        </nav>
      </div>
      <div className="container mt-34">
        <div className={cx("products")}>
          <div className={cx("products-header")}>
            <p>Plant Recommendations</p>
            <div className={cx("options")}>
              <label className={cx("checkbox-container")}>
                Sativa Seeds
                <input type="checkbox" />
                <span className={cx("checkmark")}></span>
              </label>
              <label className={cx("checkbox-container")}>
                Indica Seeds
                <input type="checkbox" />
                <span className={cx("checkmark")}></span>
              </label>
              <label className={cx("checkbox-container")}>
                Hybrid Seeds
                <input type="checkbox" />
                <span className={cx("checkmark")}></span>
              </label>
              <label className={cx("checkbox-container")}>
                Medical Seeds
                <input type="checkbox" />
                <span className={cx("checkmark")}></span>
              </label>
              <label className={cx("checkbox-container")}>
                High THC Seeds
                <input type="checkbox" />
                <span className={cx("checkmark")}></span>
              </label>
            </div>
          </div>
          <div className={cx("product-body")}>
            <div className={cx("products-group")}>
              {products.map((item, index) => (
                <ProductsGroup key={index.toString()} props={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(Dashboard: ReactElement) {
  return <DefaultLayout>{Dashboard}</DefaultLayout>;
};

export default Dashboard;
