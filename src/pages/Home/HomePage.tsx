// import About from "@/components/custom/AboutUs/About";

import Banner from "@/components/custom/Home/Banner";
import Categories from "@/components/custom/Home/Categories";
import ContactUs from "@/components/custom/Home/ContactUs";
import Discount from "@/components/custom/Home/Discount";
import Explore from "@/components/custom/Home/Explore";
import FeaturedProducts from "@/components/custom/Home/FeaturedProducts";

const HomePage = () => {
  return (
    <section className=" space-y-12 lg:space-y-24">
      {/* banner */}
      <section className="">
        <div className="lg:flex lg:gap-[5%] lg:flex-row-reverse flex-col-reverse items-center justify-between">
          <Banner />
          <Discount />
        </div>
        <Explore />
      </section>

      <section>{/* <About /> */}</section>
      <section>
        <FeaturedProducts />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <ContactUs />
      </section>
    </section>
  );
};

export default HomePage;
