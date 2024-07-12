import { SlLocationPin } from "react-icons/sl";
const Location = () => {
  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 py-9">
      <div className="bg-gray-50 dark:bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
        <div className="">
          <svg
            className="text-gray-600 dark:text-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3334 4H1.33337V21.3333H21.3334V4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3334 10.6665H26.6667L30.6667 14.6665V21.3332H21.3334V10.6665Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.33333 28.0002C9.17428 28.0002 10.6667 26.5078 10.6667 24.6668C10.6667 22.8259 9.17428 21.3335 7.33333 21.3335C5.49238 21.3335 4 22.8259 4 24.6668C4 26.5078 5.49238 28.0002 7.33333 28.0002Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.6667 28.0002C26.5077 28.0002 28 26.5078 28 24.6668C28 22.8259 26.5077 21.3335 24.6667 21.3335C22.8258 21.3335 21.3334 22.8259 21.3334 24.6668C21.3334 26.5078 22.8258 28.0002 24.6667 28.0002Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            Delivery
          </h3>
          <p className="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            Free worldwide delivery over orders above{" "}
          </p>
        </div>

        <div className="">
          <svg
            className="text-gray-600 dark:text-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            Customer Care
          </h3>
          <p className="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            Our customer care is available 24/7 at{" "}
            <span className="font-semibold cursor-pointer">+880494322943</span>{" "}
            and{" "}
            <span className="font-semibold cursor-pointer">
              sportizecare@gmail.com
            </span>
          </p>
        </div>

        <div className="">
          <SlLocationPin className=" text-3xl" />
          <h3 className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            Store Location
          </h3>
          <p className="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            Road No. 27, Dhanmondi, Dhaka 1209, Bangladesh
          </p>
        </div>

        <div className="">
          <svg
            className="text-gray-600 dark:text-white"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-10 mt-8">
            Secure Payment
          </h3>
          <p className="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
            Transaction process has end to end encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
