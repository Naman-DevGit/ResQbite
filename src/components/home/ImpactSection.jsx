import React from 'react'

const ImpactSection = () => {
  return (
    <section className="bg-black text-white py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">
          Our Impact
        </h2>

        <p className="text-gray-300 mt-4">
          Small actions can create a big environmental change.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid  md:grid-rows-2 lg:grid-cols-2 gap-8 px-6">

        {/* Card 1 */}
        <div className="bg-zinc-900 p-6 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold text-green-400">
            1200+
          </h3>

          <p className="mt-3 text-gray-300">
            Meals Saved
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 p-6 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold text-orange-400">
            500kg
          </h3>

          <p className="mt-3 text-gray-300">
            Food Waste Reduced
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 p-6 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold text-yellow-400">
            80+
          </h3>

          <p className="mt-3 text-gray-300">
            Partner Restaurants
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-zinc-900 p-6 rounded-xl text-center shadow-lg">
          <h3 className="text-4xl font-bold text-blue-400">
            3000+
          </h3>

          <p className="mt-3 text-gray-300">
            Happy Users
          </p>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;