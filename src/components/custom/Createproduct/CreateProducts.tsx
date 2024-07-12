const CreateProducts = () => {
    return (

<div className="flex items-center justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form >
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Category
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Brand
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Stock Quantity
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Rating
        </label>
        <input
          type="number"
          name="name"
          id="name"
          placeholder="Product Rating 0-5"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
        />
      </div>
    
      <div className="mb-5">
        <label
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Description
        </label>
        <textarea
          rows={4}
          name="description"
          id="description"
          placeholder="Type Your Product Description"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
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