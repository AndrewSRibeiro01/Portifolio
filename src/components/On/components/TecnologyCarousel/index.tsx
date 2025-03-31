import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import * as S from "./styled";
import * as Img from "../../../assets";
import "swiper/css";

const TechnologyCarousel = () => (
    <Swiper
        style={{ background: "#15151578", paddingLeft: "50px" }}
        spaceBetween={0}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        freeMode={true}
        speed={5000}
        slidesPerView={7}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
    >
        {Img.logo1.map((item, key) => (
            <SwiperSlide key={key}>
                <S.Img src={item} alt="logo" />
            </SwiperSlide>
        ))}
    </Swiper>
);

export default TechnologyCarousel;
