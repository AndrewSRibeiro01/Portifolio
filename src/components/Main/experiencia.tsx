import * as S from "../../Estilizações/Eexperiencia";
import DbExperiencia from "../../db/dbExperiencia";
import ComponenteExperiencias from "./ComponenteExperiencias";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

const Experiencia = () => {
    return (
        <S.DivExperiencia>
            <S.H1style>
                Experiências
            </S.H1style>
            <S.DivPadding>
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
                            <ComponenteExperiencias key={index}{...item} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </S.DivPadding>
        </S.DivExperiencia>
    )
}
export default Experiencia;