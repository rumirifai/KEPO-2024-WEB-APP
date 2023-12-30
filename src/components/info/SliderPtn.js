import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/info/sliderPtn.css";
import ptnData from "../../data/ptnData.json";

const SliderPtn = () => {

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="container py-4 px-4 justify-content-center slideptn">
      <div className="titlePtn">Jalur Masuk PTN</div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={10}
      >
        {ptnData.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              className="fotoWrapper"
              onClick={() => handleImageClick(data.link)}
            >
              <img
                src={data.imgSrc}
                alt={data.altText}
                width="350px"
                height="350px"
                className="overflow-hidden fotoPtn"
              />
              <div className="imageText">{data.altText}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPtn;
