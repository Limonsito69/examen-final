"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const ImageCard = ({ src, alt }: Props) => (
  <Image
    src={src}
    alt={alt}
    width={60}
    height={60}
    style={{ borderRadius: "8px" }}
  />
);

export default ImageCard;
