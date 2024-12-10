const Pdetails = () => {
  return (
    <div className="p-4">
      <p className="text-lg font-medium mb-4">Articles Similaries</p>
      {/* Horizontal Scrolling Container */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-[330px] bg-[#F9F7F5]  hover:bg-[#e3b07d] p-3 flex-shrink-0 rounded-md"
            >
              {/* Header Section */}
              <div className="flex justify-between items-center">
                <img
                  src="Images/heart.png"
                  alt="Favorite"
                  className="h-[32px] w-[32px]"
                />
                <p className="bg-slate-200 text-sm px-2 py-1 rounded-md">
                  ART DE LA TABLE
                </p>
              </div>

              {/* Image Section */}
              <div className="flex justify-center items-center mt-6">
                <img
                  src="Images/Table lg.png"
                  alt="Table"
                  className="h-[224px] w-[224px] object-cover"
                />
              </div>

              {/* Title and Price Section */}
              <div className="flex justify-between mt-4">
                <h4 className="font-medium text-gray-800">Title</h4>
                <h4 className="font-medium text-gray-800">0</h4>
              </div>

              <div className="flex justify-between items-center mt-2 text-sm text-gray-600 ">
                <p>0,35$/Piece . REF : VABGN5</p>
                <p className="bg-slate-200 px-2 py-1 rounded-full">20 pieces</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pdetails;
