const MainSection = () => {
  return (
    <div className="p-4">
      {/* Breadcrumb Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-x-2 sm:space-y-0 mb-4">
        <h5 className="text-lg font-medium">Home</h5>
        <ul className="list-disc pl-4 text-gray-500">
          <li>Art de la table</li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Image Section */}
        <div className="bg-[#F8F6F4] hover:bg-[#e3b07d] flex flex-col lg:flex-row lg:w-[50%] p-4 rounded-md justify-evenly">
          {/* Thumbnail Images */}
          <div className="flex lg:flex-col items-center justify-center lg:space-y-4 space-x-4 lg:space-x-0 mb-4 lg:mb-0">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] rounded-md overflow-hidden"
                >
                  <img
                    src="Images/Table ronde 165cm Festi 2.png"
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
          </div>

          {/* Main Image */}
          <div className="flex items-center justify-center">
            <img
              src="Images/Location Cheese big picture 1 (1).png"
              alt="Main Product"
              className="w-full sm:w-[300px] md:w-[400px] h-auto object-cover rounded-md"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-[50%] p-4">
          {/* Title and Price */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                Cheese-appareil à raclette 1/2 roue
              </h3>
              <h5 className="text-base sm:text-lg font-semibold text-gray-700">
                39,50$ <span className="text-sm text-gray-500">/piece</span>
              </h5>
            </div>
            <div className="mt-3 sm:mt-0">
              <img src="Images/heart.png" alt="Favorite" className="h-6 w-6" />
            </div>
          </div>

          {/* Additional Information */}
          <div className="border-t-2 border-b-2 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              {/* Size Options */}
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="flex items-center">
                  <img
                    src="Images/Capa_1.png"
                    alt="20cm icon"
                    className="rounded-md w-[24px] h-[24px]"
                  />
                  <p className="ml-2 text-gray-700 text-sm sm:text-base">
                    20cm
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src="Images/Frame.png"
                    alt="50cm icon"
                    className="rounded-md w-[24px] h-[24px]"
                  />
                  <p className="ml-2 text-gray-700 text-sm sm:text-base">
                    50cm
                  </p>
                </div>
              </div>

              {/* Reference */}
              <div className="text-gray-600 text-sm sm:text-base">
                <p>REF: VABGNS</p>
              </div>
            </div>
          </div>

          <div className="text-sm sm:text-base mt-4">
            <p>
              Location appareil a raclette-Reclette traditionnelle 1/2 roue
              <br />
              Reglable en hauter
              <br />
              Appareil a raclette professionnel
              <br />
              Boltier de chauffe horizontal reglable en hauter
            </p>
            <h5 className="font-medium">220v</h5>
            <h5 className="font-medium">900w</h5>
          </div>

          <hr className="my-4" />

          <div className="flex flex-col sm:flex-row gap-1">
            <div className="flex w-full sm:w-auto items-center bg-[#F8F6F4] p-1 sm:   justify-center rounded-md sm:h-auto">
              <button>
                <img
                  src="Images/Icon (1).png"
                  alt=""
                  className="w-[16px] h-[16px] hover:bg-green-600"
                />
              </button>
              <p className="mx-4 text-gray-700 mt-3">1</p>
              <button>
                <img
                  src="Images/minus.png"
                  alt=""
                  className="w-[16px] h-[16px] hover:bg-red-600"
                />
              </button>
            </div>
            <button className="bg-[#5CD2DD] w-full sm:w-auto text-white py-2 px-4 lg:w-full rounded-md text-sm sm:text-base hover:bg-black">
              AJOUTER AU PANIER
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6">
        {/* Description Section */}
        <div className="lg:w-[50%]">
          <h6 className="text-lg font-semibold">Description produit</h6>
          <p className="text-sm sm:text-base text-gray-700 mt-2">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit
            pour votre mariage, une fête d'anniversaire ou du personnel, ce
            produit a fait l'objet d'une sélection rigoureuse par notre équipe.
            Il est en location chez nous sous la référence "VAJGC". Nous sommes
            à votre disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite.
          </p>
        </div>

        {/* Delivery/Questions Section */}
        <div className="lg:w-[50%] p-4 space-y-4">
          <div className="bg-[#FBF9F899] p-3 rounded-md flex justify-between items-center">
            <p className="text-gray-700 text-sm sm:text-base">Livraisons</p>
            <img
              src="Images/Icon (1).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="bg-[#FBF9F899] p-3 rounded-md flex justify-between items-center">
            <p className="text-gray-700 text-sm sm:text-base">Questions</p>
            <img
              src="Images/Icon (1).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
