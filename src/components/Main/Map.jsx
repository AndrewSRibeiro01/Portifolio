import { Image } from "../../Estilizações/CardStyle"
import { Div, DivMap, DivName, DivText, MainMap, PMap } from "../../Estilizações/Emap"
import { logo1 } from "../assets"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from "swiper";


const Map = ({ nome, imagem, texto }) => {
    return (
        <DivMap>
            <Div>
                <DivName> {nome} </DivName>
                <div>
                    <MainMap>
                        {/* <Imagem src={imagem} /> */}
                        <PMap>/ IMG /</PMap>
                    </MainMap>
                    <DivText>
                        <div> {texto} </div>
                    </DivText>
                    <Swiper style={{ background: "#15151578" }}
                        spaceBetween={0}
                        modules={[Autoplay, FreeMode]}
                        className="mySwiper"
                        freeMode={true}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                    >
                        {logo1.map((item, key) =>
                            <SwiperSlide key={key}>
                                <Image src={item} alt="logo" />
                            </SwiperSlide>
                        )}
                    </Swiper >
                    <br />
                </div >
            </Div >
        </DivMap>
    )
}

export default Map