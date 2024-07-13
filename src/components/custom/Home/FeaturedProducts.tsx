import { useGetProductsQuery } from "@/redux/features/products/products.api";
import ProductCard, { IProduct } from "../AllProducts/ProductCard";

const FeaturedProducts = () => {
  const queryParams = {
    limit: 10,
  };
  const { data, isLoading } = useGetProductsQuery(queryParams);
  if (isLoading) {
    return (
      <span className="loading relative left-[50%] loading-spinner loading-lg text-center my-16"></span>
    );
  }

  return (
    <>
      {/* <h3 className=" text-center mb-[30px] lg:text-2xl text-xl font-semibold">Featured Items</h3> */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {data?.data?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
