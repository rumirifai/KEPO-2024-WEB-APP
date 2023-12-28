import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Modal } from "react-bootstrap";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/info/sliderPtn.css";

const SliderPtn = () => {
  const ptndata = [
    { imgSrc: "img/ptn/snbp.png", altText: "SNBP" },
    { imgSrc: "img/ptn/snbt.png", altText: "SNBT" },
    { imgSrc: "img/ptn/simakui.png", altText: "SIMAK UI" },
    { imgSrc: "img/ptn/smitb.png", altText: "SM ITB" },
    { imgSrc: "img/ptn/utulugm.png", altText: "UTUL UGM" },
    { imgSrc: "img/ptn/smupunpad.png", altText: "SMUP UNPAD" },
    { imgSrc: "img/ptn/umundip.png", altText: "UM UNDIP" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
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
        {ptndata.map((data, index) => (
          <SwiperSlide key={index}>
            <div
              className="fotoWrapper"
              onClick={() => handleImageClick(data.imgSrc)}
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage && selectedImage.alt}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="img-fluid"
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SliderPtn;

