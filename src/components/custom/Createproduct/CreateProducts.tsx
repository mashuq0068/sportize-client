import { useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface FormData {
  name: string;
  category: string;
  brand: string;
  rating: number;
  stock: number;
  image: string;
  description: string;
}

const CreateProducts = () => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [brandError, setBrandError] = useState("");
  const [CategoryError, setCategoryError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (!brand) {
      setBrandError("Product brand is required");
    }
    if (!category) {
      setCategoryError("Product category is required");
    }
    if (brand && category && data) {
      setBrandError("");
      setCategoryError("error");
      const product = {
        ...data,
        brand,
        category,
      };
      console.log(product);
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Name
            </label>
            <input
              {...register("name", { required: "Product name is required" })}
              type="text"
              placeholder="Product Name"
              className={`w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="outline-none text-[#6B7280] text-base">
                <SelectValue
                  className="text-[#6B7280]"
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
            {(CategoryError && !category) && (
              <p className="text-red-500 text-sm mt-1">{CategoryError}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Brand
            </label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger className="outline-none text-[#6B7280] text-base">
                <SelectValue
                  className="text-[#6B7280]"
                  placeholder="Select a Brand"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="puma">Puma</SelectItem>
                  <SelectItem value="nike">Nike</SelectItem>
                  <SelectItem value="adidas">Adidas</SelectItem>
                  <SelectItem value="reebok">Reebok</SelectItem>
                  <SelectItem value="asics">Asics </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {(brandError && !brand) && (
              <p className="text-red-500 text-sm mt-1">{brandError}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Rating
            </label>
            <input
              {...register("rating", {
                required: "Rating is required",
                min: { value: 0, message: "Rating must be at least 0" },
                max: { value: 5, message: "Rating must be at most 5" },
              })}
              type="number"
              placeholder="Product Rating 0-5"
              className={`w-full rounded-md border ${
                errors.rating ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">
                {errors.rating.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Stock Quantity
            </label>
            <input
              {...register("stock", {
                required: "Stock quantity is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter a valid stock quantity",
                },
              })}
              type="text"
              placeholder="Stock Quantity"
              className={`w-full rounded-md border ${
                errors.stock ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.stock && (
              <p className="text-red-500 text-sm mt-1">
                {errors.stock.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Image
            </label>
            <input
              {...register("image", {
                required: "Product image URL is required",
                pattern: {
                  value: /^https?:\/\/.*/,
                  message: "Please enter a valid URL",
                },
              })}
              type="text"
              placeholder="Product Image URL"
              className={`w-full rounded-md border ${
                errors.image ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-[#07074D]">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              placeholder="Type Your Product Description"
              className={`w-full resize-none rounded-md border ${
                errors.description ? "border-red-500" : "border-[#e0e0e0]"
              } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-medium text-white outline-none"
            >
              Create New
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
