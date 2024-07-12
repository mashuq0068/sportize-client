import About from "@/components/custom/AboutUs/About";
import Location from "@/components/custom/AboutUs/Location";
import OurTeam from "@/components/custom/AboutUs/OurTeam";
import ContactUs from "@/components/custom/Home/ContactUs";

const AboutUsPage = () => {
  return (
    <div className=" space-y-12">
      <About />
      <OurTeam />
      <Location/>
      <ContactUs />
    </div>
  );
};

export default AboutUsPage;
