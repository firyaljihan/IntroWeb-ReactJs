import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import './Style.css'

export const Karya = () => {
  const slides = [
    {
      url: "asset/12_XR1_FiryalJihanHaura_SSUIMockup.png",
    },
    {
      url: "asset/12_XR1_FiryalJihanHaura_MiniCarrevisi.png",
    },
    {
      url: "asset/XIR1_17_FiryalJihanHaura_Lowpolyobject.png",
    },

    {
      url: "asset/laundry.png",
    },
    {
      url: "asset/unity.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>

    <div className="karya object-cover w-full h-full">
      <div className="  max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* <div class="container text-center">
                <h2>Berikut beberapa karya saya :</h2><br/>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="asset/12_XR1_FiryalJihanHaura_SSUIMockup.png" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Ayo Masak app</h5>
                                    <p>Mockup dari desain aplikasi ayomasak yang dibuat menggunkan figma</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="asset/12_XR1_FiryalJihanHaura_MiniCarrevisi.png" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Mini-Car</h5>
                                    <p>Desain grafis menggunakan software photoshop</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="asset/XIR1_17_FiryalJihanHaura_Lowpolyobject.png" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Lowpoly</h5>
                                    <p>Desain 3D menggunakan software blender</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="asset/laundry.png" class="d-block w-100"/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Laundry F2M</h5>
                                    <p>Website laundry menggunakan bahasa PHP</p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </div> */}
    </>
  );
};

export default Karya;
