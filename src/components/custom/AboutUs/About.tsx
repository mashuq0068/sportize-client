import { useEffect, useState } from "react";

const About = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    {
      image: "/images/jordan.png",
    },
    {
      image: "/images/ronaldo.png",
    },
    {
      image: "/images/messi-2.png",
    },
    {
      image: "/images/kohli.png",
    },
  ];
  useEffect(() => {
    // Function to change image every 2 seconds
    const interval = setInterval(() => {
      setImageIndex((prevIndex: number) => (prevIndex + 1) % images.length); // Cycle through images
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);
  return (
    <>
      {/* <div className="md:fixed md:block hidden right-[20%] top-[30%]">
        <img
          src="https://www.shift4shop.com/2015/images/sell-online/digital-downloads/sporting-goods.png"
          alt="sporting-goods-image"
        />
      </div> */}
      <div className="lg:flex mt-[30px] items-center gap-[5%]">
        <div className="flex-1  rounded-lg border-black h-full flex justify-center items-center">
          {/* <img
            src="https://www.shift4shop.com/2015/images/sell-online/digital-downloads/sporting-goods.png"
            alt="sporting-goods-image"
          /> */}
          <img className="w-full duration-1000" src={`${images[imageIndex]?.image}`} alt="" />
        </div>
        <div className=" flex-1 space-y-6 z-20">
          <p>
            Welcome to Sportize, your ultimate destination for a wide range of
            premium sporting goods designed to enhance your athletic performance
            and passion for sports. Whether you're a seasoned competitor, a
            weekend warrior, or someone just starting out, Sportize is here to
            equip you with everything you need to excel in your favorite sports
            and activities.
          </p>

          <p>
            At Sportize, we pride ourselves on offering an extensive selection
            of products across various sports categories. Dive into our
            comprehensive inventory, where you'll discover top-quality gear for
            basketball, football, soccer, cricket, tennis, golf, and more. From
            essential equipment like balls, bats, racquets, and goals to
            specialized apparel such as jerseys, footwear, protective gear, and
            training accessories, we have it all to meet your sporting needs.
          </p>

          <p>
            Our commitment to excellence extends to our partnerships with
            leading brands renowned for their innovation and reliability in
            sports equipment. Whether you're seeking cutting-edge basketball
            shoes, durable football cleats, precision-engineered tennis
            racquets, or high-performance golf clubs, you can trust that each
            product on Sportize meets the highest standards of quality and
            functionality.
          </p>

          <p>
            Beyond providing superior sporting goods, Sportize fosters a vibrant
            community where athletes of all ages and skill levels come together
            to share their passion for sports. We understand that sports are
            more than just physical activities—they're a source of inspiration,
            discipline, and joy. That's why Sportize is dedicated to supporting
            your journey, whether you're aiming for professional achievements or
            simply enjoying recreational play.
          </p>

          {/* <p>
            Shopping at Sportize is easy and secure, with a user-friendly
            interface, secure transactions, and prompt delivery ensuring a
            seamless experience from browsing to checkout. Join thousands of
            satisfied customers who rely on Sportize for their sporting needs
            and discover why we're the preferred choice for athletes seeking
            top-tier equipment and exceptional service.
          </p>

          <p>
            Empower your sporting journey with Sportize. Explore our curated
            collections, benefit from expert recommendations, and elevate your
            game with confidence. Visit Sportize today and take your passion for
            sports to new heights.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default About;
