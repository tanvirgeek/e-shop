import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/utils/products";
import { trancateText } from "@/utils/trancateText";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <HomeBanner />
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCard data={product} key={product.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}
