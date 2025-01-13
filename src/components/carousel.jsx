import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl" autoplay={true} loop={true}>
      <img
        src="/img/carousel-img1.jpg"
        alt="image 1"
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <img
        src="/img/carousel-img2.jpg"
        alt="image 2"
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <img
        src="/img/carousel-img3.jpg"
        alt="image 3"
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}