import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback, useEffect } from "react";
import images from "@/configs/poster_data";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PosterSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 100,
        transition: { duration: 0.7 },
      });
    }
    if (!inView) {
      animation.start({ y: 100, opacity: 0 });
    }

    if (inView) {
      animation.start({
        y: 0,
        opacity: 100,
        transition: { duration: 0.7 },
      });
    }
    if (!inView) {
      animation.start({ y: 100, opacity: 0 });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animation} id="poster" className="pb-12">
      <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl m-font">
        Poster
      </h1>
    <motion.div ref={ref} animate={animation} id="poster" className="pb-12">
      <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl m-font">
        Poster
      </h1>
      <p className="px-10 text-sm text-center pb-9 sm:text-base m-font">
        Poster Pelaksanaan Rangkaian Acara Diponegoro Chemistry Fair 2023
        Poster Pelaksanaan Rangkaian Acara Diponegoro Chemistry Fair 2023
      </p>
      <div className="flex items-center justify-center max-w-full mx-auto mb-[40px]">
        {images.map((url, index) => (
          <img
            src={url}
            onClick={() => openImageViewer(index)}
            alt="Poster"
            className="lg:w-[600px] object-center lg:h-[800px] hover:scale-105 transition-all ease-in-out duration-300"
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
