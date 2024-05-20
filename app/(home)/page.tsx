import AboutUs from "./AboutUs";
import Benefit from "./Benefit";
import Categories from "./Categories";
import Deals from "./Deals";
import Offers from "./Offers";
import PromoCarousel from "./PromoCarousel";
import Trending from "./Trending";

export default function Home() {
  return (
    <>
      <PromoCarousel />
      <section className="px-[50px] pt-12">
        <Trending />
      </section>
      <section className="px-[50px] pt-12">
        <Deals />
      </section>
      <section className="pt-12">
        <Offers
          offer={{
            offerLink: "/",
            offerImage: "https://picsum.photos/1280/720",
          }}
        />
      </section>
      <section className="px-[50px] pt-12">
        <Categories categories={categories} />
      </section>
      <section className="px-[50px] pt-12">
        <Benefit />
      </section>
      <section className="px-[50px] pt-12">
        <AboutUs />
      </section>
    </>
  );
}

const categories = [
  {
    id: 1,
    name: "T-Shirts",
    imageSrc: "https://random.imagecdn.app/640/640",
  },
  {
    id: 2,
    name: "Jeans & Denim",
    imageSrc: "https://random.imagecdn.app/640/640",
  },
  {
    id: 3,
    name: "Dresses & Skirts",
    imageSrc: "https://random.imagecdn.app/640/640",
  },
  {
    id: 4,
    name: "Activewear",
    imageSrc: "https://random.imagecdn.app/640/640",
  },
  {
    id: 5,
    name: "Outerwear & Jackets",
    imageSrc: "https://random.imagecdn.app/640/640",
  },
];
