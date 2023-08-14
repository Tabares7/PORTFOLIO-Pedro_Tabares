import React from "react";

const PortfolioGrid = () => {
  return (
    <div className="lg:w-4/5 mx-auto w-full p-5">
      <div className="grid md:grid-cols-4 md:grid-rows-5 gap-3 min-h-[1300px]   grid-cols-2 grid-rows-8">
        <div className="bg-red-100 md:col-span-3 md:row-span-2 col-span-2 row-span-2 rounded-lg">
          C1
        </div>
        <div className="bg-red-100 md:col-start-4 md:row-start-1 rounded-lg">
          C2
        </div>
        <div className="bg-red-100 md:col-start-4 md:row-start-2 rounded-lg">
          C3
        </div>
        <div className="bg-red-100 rounded-lg">C4</div>
        <div className="bg-red-100  rounded-lg">C5</div>
        <div className="bg-red-100 row-start-4 col-span-2 md:col-span-2 rounded-lg">
          C6
        </div>
        <div className="bg-red-100 col-span-2 md:col-span-2 rounded-lg">C7</div>
        <div className="bg-red-100 rounded-lg">C8</div>
        <div className="bg-red-100 rounded-lg">C9</div>
        <div className="bg-red-100 rounded-lg">C10</div>
        <div className="bg-red-100 col-span-2 rounded-lg">C11</div>
        <div className="bg-red-100 col-start-2 row-start-7 md:row-start-5 md:col-start-4 rounded-lg">
          C12
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
