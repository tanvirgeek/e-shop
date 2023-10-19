import Container from "@/components/Container";
import React from "react";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
interface IPrams {
  productId?: string;
}
const Product = ({ params }: { params: IPrams }) => {
  console.log(params.productId);
  return (
    <div>
      <Container>
        <ProductDetails product = {product} />
      </Container>
    </div>
  );
};

export default Product;
