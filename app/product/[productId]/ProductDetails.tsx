import { Rating } from "@mui/material";

interface ProductDetailsProps {
  product: any;
}

const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;
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
        <div>Color</div>
        <Horizontal />
        <div>Quantity</div>
        <Horizontal />
        <div>Add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
