import { Carousel } from '@material-tailwind/react';

const CarouselImages = () => {
    const renderCarouselImages = () => {
        const images = [
          {
            src: "https://i.imgur.com/3fegavC.jpeg",
            alt: "image 1",
          },
          {
            src: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/MPaEbz-/videoblocks-medium-pan-portrait-with-slowmo-of-factory-worker-posing-for-camera-with-hands-crossed-while-his-male-and-female-colleagues-walking-through-plant-facility-in-background_ho-dlgtco_thumbnail-1080_05.png",
            alt: "image 2",
          },
          {
            src: "https://us.tencatefabrics.com/hs-fs/hubfs/moltenMetalHeader2.jpg?width=1920&name=moltenMetalHeader2.jpg",
            alt: "image 3",
          },
        ];
    
        return images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        ));
      };
    
  return (
    <Carousel className="relative w-full z-10 " loop={true} autoplay={true}>{renderCarouselImages()}</Carousel>
  )
}

export default CarouselImages