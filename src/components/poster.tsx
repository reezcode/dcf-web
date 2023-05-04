import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";
import { useState, useCallback } from "react";
import images from "@/configs/poster_data";

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
  
  return (
    <div id="poster">
      <h1 className="p-3 text-2xl font-bold text-center sm:text-4xl m-font">Poster</h1>
      <p className="px-10 text-sm text-center pb-9 sm:text-base m-font">
      Poster Pelaksanaan Rangkaian Acara Diponegoro Chemistry Fair 2023             
      </p>
      <div className="flex items-center justify-center max-w-full mx-auto mb-[40px]">
        {images.map((url, index) => (
                <Image
                    src={url}
                    key={index}
                    width={430}
                    height={560}
                    onClick={() => openImageViewer(index)}
                    alt="Poster"
                    className="lg:w-[700px] lg:h-[800px] hover:scale-105 transition-all ease-in-out duration-300"
                />
            ))}

            {isViewerOpen && (
                <ImageViewer
                src={ images }
                currentIndex={ currentImage }
                disableScroll={ true }
                closeOnClickOutside={ true }
                onClose={ closeImageViewer }
                />
            )}
        </div>
    </div>
  )
}
