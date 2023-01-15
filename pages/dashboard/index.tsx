import { useState } from "react";
import Image from "next/image";
import classnames from "classnames/bind";
import type { ReactElement } from "react";
import DefaultLayout from "src/layouts/DefaultLayout/DefaultLayout";
import style from "./Dashboard.module.css";
import { plus } from "@src/assets/icons";
import { OverviewCard, ProgressBoard } from "@src/components";
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
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(Dashboard: ReactElement) {
  return <DefaultLayout>{Dashboard}</DefaultLayout>;
};

export default Dashboard;
