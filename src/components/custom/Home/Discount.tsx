import gift from "/images/discount.jpg";
import discount from "/images/discount.jpg";

const Discount = () => {
  return (
    <div className="lg:flex-1  overflow-hidden lg:mt-0 mt-[50px]  lg:block flex">
      <div className="lg:max-w-none max-w-[40%] mx-auto">
      <img src={discount} alt="discount-image"  className=" object-contain"/>
      </div>
      <div className="lg:max-w-none max-w-[40%] mx-auto">
      <img src={gift} alt="discount-image object-contain" />
      </div>
    </div>
  );
};

export default Discount;
