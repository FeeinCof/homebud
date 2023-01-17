import classnames from "classnames/bind";
import CardItem from "../CardItem/CardItem";
import style from "./ProductsGroup.module.css";
const cx = classnames.bind(style);

interface Product {
  img: string;
  title: string;
  rate: number;
  content: string;
  averagePlantYield: number;
}

interface Products {
  name: string;
  products: Product[];
}

interface Props {
  props: Products;
}

const ProductsGroup = ({ props }: Props) => {
  return (
    <div className={cx("products-group")}>
      <div className={cx("header")}>{props.name}</div>
      <div className={cx("body")}>
        <ul>
          {props.products.map((item, index) => (
            <li key={index.toString()}>
              <CardItem
                img={item.img}
                title={item.title}
                rate={item.rate}
                content={item.content}
                averagePlantYield={item.averagePlantYield}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsGroup;
