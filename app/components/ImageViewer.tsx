"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface Props {
  images: string[];
}
const ImageViewer = ({ images }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-black ">
        <Carousel className="w-full relative h-min  ">
          <CarouselContent>
            {images?.map((image) => (
              <CarouselItem>
                <img
                  src={image}
                  className=" h-full  md:max-h-96 lg:max-h-[450px]   w-full object-contain"
                  onClick={() => setOpen(true)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={images.map((image) => ({
          src: image,
          alt: "image 1",
          width: 3840,
          height: 2560,
        }))}
      />
    </>
  );
};

export default ImageViewer;
