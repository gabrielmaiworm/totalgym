import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

export default function CardsClients() {
  return (
    <div className="carousel-wrapper py-20">
      <Carousel breakPoints={breakPoints} showArrows={false}>
        <Item className="bg-[url('/src/assets/print_2.svg')] bg-cover bg-top"></Item>
        <Item className="bg-[url('/src/assets/print_2.svg')] bg-cover bg-top"></Item>
        <Item className="bg-[url('/src/assets/print_2.svg')] bg-cover bg-top"></Item>
        <Item className="bg-[url('/src/assets/print_2.svg')] bg-cover bg-top"></Item>
        <Item className="bg-[url('/src/assets/print_2.svg')] bg-cover bg-top"></Item>
        <Item className="bg-[url('/src/assets/print_2.svg')] bg-cover bg-top"></Item>
      </Carousel>
    </div>
  );
}
