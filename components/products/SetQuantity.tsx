"use client";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const buttonStyle = "border-[1.2px] border-slate-300 px-2 rounded";

const SetQuantity: React.FC<SetQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex, gap-8 items-center">
      {cartCounter && <div className="font-semibold">QUANTITY</div>}
      <div className="flex gap-4 items-center text-base">
        <button className={buttonStyle} onClick={handleQtyDecrease}>
          -
        </button>
        {cartProduct.quantity}
        <button className={buttonStyle} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
