
import ProductCard from "../AllProducts/ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.iXarM1XfNsH89zUKX31n2QHaHa&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.Rqg0yPXWuSI5pLmgR1dixgHaE2&pid=Api&P=0&h=220",
      des: "  consectetur voluptatesaccusamus. Sequi, nulla voluptatibus.",
    },
  ];
  return (
    <>
    {/* <h3 className=" text-center mb-[30px] lg:text-2xl text-xl font-semibold">Featured Items</h3> */}
    <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {products?.map((product, i) => (
        <ProductCard key={i} product={product}></ProductCard>
      ))}
    </div>
    </>
  );
};

export default FeaturedProducts;
