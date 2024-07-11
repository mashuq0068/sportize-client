// import About from "@/components/custom/AboutUs/About";
import FeaturedProducts from "@/components/custom/FeaturedProdutcs/FeaturedProducts";
import Banner from "@/components/custom/Home/Banner";
import Discount from "@/components/custom/Home/Discount";
import Explore from "@/components/custom/Home/Explore";

const HomePage = () => {
  return (
    <section className=" space-y-36">
      {/* banner */}
      <section className="">
        <div className="lg:flex lg:gap-[5%] lg:flex-row-reverse flex-col-reverse items-center justify-between">
          <Banner />
          <Discount />
        </div>
        <Explore />
      </section>

      <section>
        {/* <About /> */}
      </section>
      <section>
        <FeaturedProducts/>
      </section>
    </section>
  );
};

export default HomePage;
