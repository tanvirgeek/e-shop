"use client";

import { trancateText } from "@/utils/trancateText";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className=" col-span-1 cursor-pointer border-[1.2px] border-slate-200 rounded-sm p-2 transition-all hover:scale-150 text-center text-sm">
      <div
        className="
      flex
      flex-col
      items-center
      w-full
      gap-1"
      >
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images[0].image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="mt-4">{trancateText(data.name)}</div>
        <div>Rating</div>
        <div>{data.reviews.length} reviews</div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCard;
