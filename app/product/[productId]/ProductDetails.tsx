"use client";
import Color from "@/components/products/Color";
import SetQuantity from "@/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });
  console.log(cartProduct);
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity == 99) {
      return;
    } else {
      setCartProduct((prev) => ({ ...prev, quantity: prev.quantity++ }));
    }
  }, [cartProduct]);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity == 1) {
      return;
    } else {
      setCartProduct((prev) => ({ ...prev, quantity: prev.quantity-- }));
    }
  }, [cartProduct]);

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>Images</div>
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} Reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          <span>{product.category}</span>
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          <span>{product.brand}</span>
        </div>
        <div className={product.instock ? "text-green-500" : "text-red-500"}>
          {product.instock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        <div>
          <Color
            cartProduct={cartProduct}
            images={product.images}
            handleColor={handleColorSelect}
          />
        </div>
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease}
        />
        <Horizontal />
        <div>Add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
