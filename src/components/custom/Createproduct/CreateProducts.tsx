import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const CreateProducts = () => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault;
    const name = e.target.name.value;
    const rating = e.target.rating.value;
  };
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Category
            </label>
            <Select required value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full outline-none  text-[#6B7280] text-base">
                <SelectValue
                  className="text-[#6B7280] "
                  placeholder="Select a Category"
                />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  <SelectItem value="golf">Golf</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="rugby">Rugby</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                  <SelectItem value="badminton">Badminton</SelectItem>
                  <SelectItem value="basket ball">Basket Ball </SelectItem>
                  <SelectItem value="baseball">Baseball</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div  className="mb-5">
            <label  className="mb-3 block text-base font-medium text-[#07074D]">
              Brand
            </label>
            <Select required value={brand} onValueChange={setBrand}>
              <SelectTrigger className="w-full outline-none  text-[#6B7280] text-base">
                <SelectValue
                  className="text-[#6B7280] "
                  placeholder="Select a Brand"
                />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  <SelectLabel>Brands</SelectLabel>
                  <SelectItem value="puma">Puma</SelectItem>
                  <SelectItem value="nike">Nike</SelectItem>
                  <SelectItem value="adidas">Adidas</SelectItem>
                  <SelectItem value="reebok">Reebok</SelectItem>
                  <SelectItem value="asics">Asics </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Stock Quantity
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Image
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Product Image url"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Rating
            </label>
            <input
              required
              type="number"
              name="name"
              id="name"
              placeholder="Product Rating 0-5"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Description
            </label>
            <textarea
              rows={4}
              required
              name="description"
              id="description"
              placeholder="Type Your Product Description"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-medium text-white outline-none">
              Create New
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
