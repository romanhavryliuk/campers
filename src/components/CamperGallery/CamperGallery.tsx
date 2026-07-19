"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import type { CamperGalleryImage } from "@/types/camper";
import styles from "./CamperGallery.module.css";

interface CamperGalleryProps {
  gallery: CamperGalleryImage[];
  name: string;
}

// галерея на Swiper: велике фото зверху синхронізоване з рядом мініатюр знизу
export default function CamperGallery({ gallery, name }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!gallery?.length) return null;

  // бекенд не гарантує, що масив фото вже відсортований за полем order
  const sortedGallery = [...gallery].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
      >
        {sortedGallery.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.original}
              alt={`${name} photo ${index + 1}`}
              width={640}
              height={480}
              className={styles.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress
        freeMode
        slidesPerView={4}
        spaceBetween={12}
        className={styles.thumbsSwiper}
      >
        {sortedGallery.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.thumb}
              alt={`${name} thumbnail ${index + 1}`}
              width={160}
              height={120}
              className={styles.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
