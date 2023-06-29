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
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={false}
        showArrows={false}
      >
        <Item>
          <img src="/src/assets/print_1.png" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_2.png" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_3.png" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_4.png" alt="" />
        </Item>
        <Item>
          <img src="/src/assets/print_5.png" alt="" />
        </Item>
      </Carousel>
    </div>
  );
}
