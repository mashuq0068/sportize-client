import { BsCart3 } from "react-icons/bs";
import Rating from "react-rating";

const SingleProduct = () => {
  return (
    <div style={{}} className=" px-[3%] h-[100vh]   md:px-[10%]  ">
      {/* details */}
      <div className=" flex lg:gap-12 justify-between">
        {/* left */}
        <div className="lg:w-[60%] ">
          <div className="mt-36 mb-12 max-w-[200px] rounded-lg max-h-[200px] overflow-hidden">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={
                "https://tse3.mm.bing.net/th?id=OIP.vYMFtv1yl6QVXGnTUY4DkAAAAA&pid=Api&P=0&h=220"
              }
              alt=""
            />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, omnis veniam unde provident dignissimos facere fugit
            magnam ex expedita nulla veritatis hic, harum molestias quod quis
            nesciunt quasi accusamus dolor similique repellat cupiditate amet
            vitae placeat optio? Praesentium, quis? Pariatur natus dicta atque
            quam fuga corporis ducimus odit praesentium suscipit ad? Quis error
            praesentium commodi. Ab atque molestiae saepe ex fugit facilis
            porro, mollitia totam sint distinctio, rerum quia illum inventore
            deserunt modi. Minima, aut. Blanditiis error, suscipit esse
            consequuntur architecto dolores consequatur, necessitatibus animi
            quia repellendus ex beatae praesentium at similique ad minima
            officiis mollitia nam voluptas ullam accusamus!
          </div>
        </div>
        {/* right */}
        <div className="text-lg relative flex-1 mt-[100px] h-max pt-[2%]   px-[2%]  space-y-3 drop-shadow-xl rounded-xl shadow-xl  ">
          <p className="spacing text-gray-600">
            <span className="lg:font-bold text-black">Name</span> : {}
          </p>
          <p className="spacing text-gray-600 ">
            <span className="lg:font-bold text-black">Category</span> : {}
          </p>

          <p className="spacing text-gray-600">
            <span className="lg:font-bold text-black">Brand</span>: {}
          </p>
          <p className="spacing text-gray-600">
            <span className="lg:font-bold text-black">Stock</span>: {}
          </p>

          <p className="spacing text-gray-600">
            <span className="lg:font-bold text-black">Rating</span>:
            {/* @ts-expect-error there is a version miss-match in the source */}
            <Rating
              initialRating={4}
              readonly
              emptySymbol={
                <svg
                  stroke="currentColor"
                  fill="#FFD700"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                </svg>
              }
              fullSymbol={
                <svg
                  stroke="yellow"
                  fill="#FFD700"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                </svg>
              }
            />
          </p>
          <button className=" bg-black w-full justify-center rounded-lg  text-white px-6 py-2 flex items-center gap-2 ">
            Add to cart <BsCart3 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
