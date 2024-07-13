import { useGetProductsQuery } from "@/redux/features/products/products.api";
import ProductCard, { IProduct } from "./ProductCard";
import { useAppSelector } from "@/redux/hooks";

const AllProducts = () => {
  const { brand, rating, category, searchTerm, price , sort } = useAppSelector(
    (state) => state.filter
  );
  const queryParams = {
    brand,
    rating,
    category,
    searchTerm,
    price,
    sort
  };
  const { data  , isLoading} = useGetProductsQuery(queryParams);
  if(data?.data?.length === 0 ) {
    return (
        <div className="my-16 text-center text-gray-500 text-2xl">No Product Found</div>
    )
  }
  if(isLoading){
   return( <span className="loading relative left-[50%] loading-spinner loading-lg text-center my-16"></span>)
  }
  return (
    <div className=" mt-12">
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {data?.data?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
