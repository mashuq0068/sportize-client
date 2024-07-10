import Banner from "@/components/custom/Home/Banner";
import Discount from "@/components/custom/Home/Discount";
import Explore from "@/components/custom/Home/Explore";

const HomePage = () => {
  return (
    <section>
      {/* banner */}
      <section className="">
        <div className="lg:flex lg:gap-[5%] lg:flex-row-reverse flex-col-reverse items-center justify-between">
        <Banner />
        <Discount  />
        </div>
        <Explore/>
      </section>
    </section>
  );
};

export default HomePage;
