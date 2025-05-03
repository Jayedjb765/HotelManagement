import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative h-[900px] w-full">
        {/* Image with blur */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co.com/jvbLD2Yk/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg"
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute top-1/3 left-20 text-white z-10">
          <p className="bg-white bg-opacity-80 px-4 py-1 rounded text-black font-medium">
            Miami,{" "}
            <span className="text-red-600 font-semibold">South Florida</span>
          </p>
          <h1 className="text-5xl font-extrabold mt-4 leading-tight">
            ACT NOW! <br />
            GET THE HIGHEST <br />
            LEVEL PENTHOUSE
          </h1>
        </div>

        {/* Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
          <a href="#slide3" className="btn btn-circle ml-20">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle mr-20">
            ❯
          </a>
        </div>
      </div>

      {/* Repeat same structure for slide 2 and slide 3 with blur-sm class */}
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative h-[900px] w-full">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co.com/bM6tS9Tv/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="absolute top-1/3 left-20 text-white z-10">
          <p className="bg-white bg-opacity-80 px-4 py-1 rounded text-black font-medium">
            Miami,{" "}
            <span className="text-red-600 font-semibold">South Florida</span>
          </p>
          <h1 className="text-5xl font-extrabold mt-4 leading-tight">
            ACT NOW! <br />
            GET THE HIGHEST <br />
            LEVEL PENTHOUSE
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
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
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co.com/HT695gDn/webaliser-TPTXZd9m-Oo-unsplash.jpg"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="absolute top-1/3 left-20 text-white z-10">
          <p className="bg-white bg-opacity-80 px-4 py-1 rounded text-black font-medium">
            Miami,{" "}
            <span className="text-red-600 font-semibold">South Florida</span>
          </p>
          <h1 className="text-5xl font-extrabold mt-4 leading-tight">
            ACT NOW! <br />
            GET THE HIGHEST <br />
            LEVEL PENTHOUSE
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
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
