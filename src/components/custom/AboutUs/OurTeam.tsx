const OurTeam = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
          <div className="xl:w-1/2 xl:mx-4">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Our Team
            </h1>

            <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              Meet the talented individuals who drive our vision and mission
              forward. Our team is composed of dedicated professionals with a
              diverse range of skills and expertise, committed to delivering
              exceptional results and innovation. We value collaboration,
              creativity, and a shared passion for excellence. Together, we
              strive to make a positive impact and achieve our goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
            <div>
              <img
                className="object-cover rounded-xl h-64 w-full"
                src="https://tse4.mm.bing.net/th?id=OIP.VWmmfiaMKy1Vg3WPUUBx5gHaEK&pid=Api&P=0&h=220"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Riyan Paul
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                CEO and Founder
              </p>
            </div>

            <div>
              <img
                className="object-cover rounded-xl h-64 w-full"
                src="https://tse2.mm.bing.net/th?id=OIP.Ef-B5pvx8jcSc1m4erjbvAHaFj&pid=Api&P=0&h=220"
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Larry Salt
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
                Product Manager and Finance Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
