import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full mt-20">
      <div id="slide1" className="carousel-item relative h-[900px] w-full">
        <img
          src="https://i.ibb.co.com/jvbLD2Yk/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg"
          className="w-full object-cover"
        />
        <div className="absolute top-1/3 left-70 text-white">
          <p className="bg-white bg-opacity-80  w-50 px-4 py-1 rounded text-black font-medium">
            Torrento,
            <span className="text-red-600 font-semibold">South Canada</span>
          </p>
          <h1 className="text-5xl font-extrabold mt-4 text-sky-200 leading-tight">
            ACT NOW! <br />
            GET THE HIGHEST <br />
            LEVEL PENTHOUSE
          </h1>
        </div>
        {/* Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle ml-20">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle mr-20">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative h-[900px] w-full">
        <img
          src="https://i.ibb.co.com/bM6tS9Tv/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg"
          className="w-full object-cover"
        />
        <div className="absolute top-1/3 left-70 text-white">
          <p className="bg-white bg-opacity-80  px-4 py-2 w-48 rounded text-black font-medium">
            Melborn,{" "}
            <span className="text-red-600 font-semibold">Austalia</span>
          </p>
          <h1 className="text-5xl font-extrabold text-sky-200 mt-4 leading-tight">
            ACT NOW! <br />
            GET THE HIGHEST <br />
            LEVEL PENTHOUSE
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle ml-20">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle mr-20">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative h-[900px] w-full">
        <img
          src="https://i.ibb.co.com/HT695gDn/webaliser-TPTXZd9m-Oo-unsplash.jpg"
          className="w-full object-cover"
        />
        <div className="absolute top-1/3 left-70 text-white">
          <p className="bg-white bg-opacity-80 px-4 py-1 rounded w-48 text-black font-medium">
            Miami,{" "}
            <span className="text-red-600 font-semibold">South Florida</span>
          </p>
          <h1 className="text-5xl font-extrabold text-sky-200 mt-4 leading-tight">
            ACT NOW! <br />
            GET THE HIGHEST <br />
            LEVEL PENTHOUSE
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle ml-20">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle mr-20">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
