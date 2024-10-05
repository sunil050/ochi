import React from "react";

function Cards() {
  return (
    <div data-scroll-section data-scroll className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-32">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          ></img>
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019-2024
          </button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          ></img>
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019-2024
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          ></img>
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019-2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
