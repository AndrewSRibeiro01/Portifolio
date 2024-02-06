import { DivExperiencia, DivPadding, H1style } from "../../Estilizações/Eexperiencia";
import DbExperiencia from "../../db/dbExperiencia";
import ComponenteExperiencias from "./ComponenteExperiencias";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

const Experiencia = () => {
    return (
        <DivExperiencia>
            <H1style>
                Experiências
            </H1style>
            <DivPadding>
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
            </DivPadding>
        </DivExperiencia>
    )
}
export default Experiencia;