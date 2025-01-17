"use client";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  images: string[];
}
const ImageViewer = ({ images }: Props) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla text-white" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default ImageViewer;
