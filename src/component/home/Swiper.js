import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function Swipery() {
  return (
    <>
      <div className="text-center">
        <span className="text-3xl font-serif text-darkgreen tracking-wider font-thin  md:text-4xl">
          OUR ETHIQUE STORY
        </span>
        <div className="p-14 md:hidden h-96 ">
          <Swiper
            Autoplay={{
              delay: 3000,
            }}
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={true}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            speed={800}
            className="mySwiper h-80"
          >
            <SwiperSlide>
              <img src="/images/door.webp" alt="hey" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/box.webp" alt="hey" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/logo.webp" alt="hey" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden md:block h-[425px] mt-10  ">
          <Swiper
            Autoplay={{
              delay: 3000,
            }}
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            scrollbar={true}
            modules={[Pagination, Keyboard, Scrollbar, Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            speed={800}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-row  w-[900px] h-[425px]">
                <img
                  className="w-1/2 "
                  src="/images/webimg/tabloweb.webp"
                  alt="hey"
                />
                <div className="flex flex-col gap-4 tracking-wide leading-relaxed font-serif w-1/2 px-10 text-left justify-center text-darkgreen   bg-golden">
                  <h1 className="text-2xl">ABOUT ETHIQUE</h1>
                  <p className="text-sm">
                    Ethique Plant Based appeals to everyone, not only the ones
                    who are on a plant-based diet. It aims to introduce everyone
                    to Ethique flavors and show delicious products can be made
                  </p>
                  <p>by using plant base ingredients</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row  w-[900px] h-[425px]  ">
                <img
                  className="w-1/2 "
                  src="/images/webimg/darweb.webp"
                  alt="hey"
                />
                <div className="flex flex-col gap-4 tracking-wide py-3 leading-relaxed font-serif w-1/2 px-10 text-left justify-center text-darkgreen   bg-golden">
                  <h1 className="text-2xl">Sustainability</h1>
                  <p className="text-sm">
                    There is a philosophy under the name of Ethique. The
                    founders of Ethique, who set out with the question, “Is it
                    possible to do a job without harming a living thing?”always
                    aim to be ethical towards animals, nature, human health and
                    their employee
                  </p>
                  <p>by using plant base ingredients</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-row  w-[900px] h-[425px] ">
                <img
                  className="w-1/2 "
                  src="/images/webimg/boxweb.webp"
                  alt="hey"
                />
                <div className="flex flex-col gap-4 tracking-wide leading-relaxed font-serif w-1/2 px-10 text-left justify-center text-darkgreen   bg-golden">
                  <h1 className="text-2xl">OUR ETHIQUE PHILOSOPHY</h1>
                  <p className="text-sm">
                    Ethique Plant Based appeals to everyone, not only the ones
                    who are on a plant-based diet. It aims to introduce everyone
                    to Ethique flavors and show delicious products can be made
                  </p>
                  <p className="text-sm">
                    Our work alone is not enough, each individual decision and
                    the small steps that can be taken will play an important
                    role for a better planet.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
