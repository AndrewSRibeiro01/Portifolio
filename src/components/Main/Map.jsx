import { Image } from "../../Estilizações/CardStyle"
import { Div, DivName, DivText } from "../../Estilizações/Emap"
import { logo1 } from "../assets"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from "swiper";


const Map = ({ nome, imagem, texto }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "25%", marginBottom: "15px", alignItems: "center" }}>
            <Div>
                <DivName> {nome} </DivName>
                <div>
                    <div style={{ margin: "0 auto", width: "90%", display: "flex", justifyContent: "center", borderRadius: "20px", background: "#252525", height: "200px", alignItems: "center" }}>
                        {/* <Imagem src={imagem} /> */}
                        <p style={{ fontSize: "48px", fontStyle: "normal", fontWeight: 900, lineHeight: "normal", letterSpacing: "0.96px", }}>/ IMG /</p>
                    </div>
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
        </div>
    )
}

export default Map