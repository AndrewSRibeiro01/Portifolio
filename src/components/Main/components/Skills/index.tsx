import * as S from "./styled";
import Experiences from "../Experiences";
import DbExperiencia from "../../../../db/dbExperiencia";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

const Experiencia = () => {
    return (
        <S.Experience>
            <S.H1style>
                Experiências
            </S.H1style>
            <S.Padding>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {DbExperiencia.map((item, index) =>
                        <SwiperSlide>
                            <Experiences key={index}{...item} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </S.Padding>
        </S.Experience>
    )
}
export default Experiencia;