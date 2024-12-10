import React from "react";

const Services = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #EE4197 0%, #FFFFFF 56.61%)",
      }}
      className="p-5 md:p-10"
    >
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h5 className="text-xl md:text-2xl font-bold">
          On s’occupe de{" "}
          <span className="text-[#5CD2DD] px-2 py-1 rounded">tout</span>
        </h5>
        <p className="text-sm md:text-base mt-2">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>

      {/* Services Section */}
      <div className="flex gap-5 overflow-x-auto md:justify-center items-center scrollbar-hide">
        {/* Item 1 */}
        <div className="text-center min-w-[200px]">
          <div className="flex justify-center">
            <img
              src="Images/Groupe_25.png"
              alt="Livraison & Reprise Icon"
              className="h-12 md:h-16"
            />
          </div>
          <h6 className="text-sm md:text-base font-semibold mt-3">
            Livraison & Reprise
          </h6>
          <p className="text-xs md:text-sm mt-1">Selon vos besoins</p>
        </div>

        {/* Separator */}
        <div className="hidden lg:block">
          <hr className="w-[100px] mx-auto" />
        </div>

        {/* Item 2 */}
        <div className="text-center min-w-[200px]">
          <div className="flex justify-center">
            <img src="Images/dish.png" alt="Nettoyage Icon" className="h-12 md:h-16" />
          </div>
          <h6 className="text-sm md:text-base font-semibold mt-3">Nettoyage</h6>
          <p className="text-xs md:text-sm mt-1">Selon vos besoins</p>
        </div>

        {/* Separator */}
        <div className="hidden lg:block">
          <hr className="w-[100px] mx-auto" />
        </div>

        {/* Item 3 */}
        <div className="text-center min-w-[200px]">
          <div className="flex justify-center">
            <img
              src="Images/Groupe_56.png"
              alt="Commande Illimitée Icon"
              className="h-12 md:h-16"
            />
          </div>
          <h6 className="text-sm md:text-base font-semibold mt-3">
            Commande Illimitée
          </h6>
          <p className="text-xs md:text-sm mt-1">Tout est possible</p>
        </div>

        {/* Separator */}
        <div className="hidden lg:block">
          <hr className="w-[100px] mx-auto" />
        </div>

        {/* Item 4 */}
        <div className="text-center min-w-[200px]">
          <div className="flex justify-center">
            <img
              src="Images/Groupe_123.png"
              alt="Transport & Enlèvement Icon"
              className="h-12 md:h-16"
            />
          </div>
          <h6 className="text-sm md:text-base font-semibold mt-3">
            Transport & Enlèvement
          </h6>
          <p className="text-xs md:text-sm mt-1">On s’occupe de tout.</p>
        </div>
      </div>

      {/* Responsive Section */}
      <div className="flex flex-col md:flex-row justify-between mt-7 gap-5">
        {/* Left Image */}
        <div className="w-full md:w-[50%]">
          <img
            src="Images/BUFFET_037 1.png"
            alt="Buffet Image"
            className="h-[200px] md:h-[300px] rounded-md"
          />
        </div>

        {/* Right Section */}
        <div className="bg-[#BDA2B0] rounded-md md:h-[300px] w-full md:w-[50%]">
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-semibold">
              S'inscrire & economiser{" "}
              <span className="text-[#5CD2DD]">10%</span>
            </h3>
            <p className="text-sm md:text-base mt-3">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn't. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
            <div className="flex flex-col md:flex-row md:mt-5 gap-3 mt-5">
              <input
                type="email"
                placeholder="jhon@deo.com"
                className="p-2 w-full md:w-[70%] rounded-md border-2"
              />
              <button className="bg-[#5CD2DD] p-2 w-full md:w-[30%] rounded-md text-white">
                S'INSCRIRE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="hidden md:block mt-5" />
    </div>
  );
};

export default Services;
