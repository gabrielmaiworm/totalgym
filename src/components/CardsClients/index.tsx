import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 680, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

export default function CardsClients() {
  return (
    <div className="carousel-wrapper py-20">
      <Carousel breakPoints={breakPoints} showArrows={false}>
        <Item>
          <img src="/src/assets/print_2.svg" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_2.svg" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_2.svg" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_2.svg" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_2.svg" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_2.svg" alt="" />
        </Item>
      </Carousel>
    </div>
  );
}
