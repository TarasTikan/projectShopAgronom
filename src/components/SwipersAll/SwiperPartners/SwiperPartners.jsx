import treeleast from '../../../assets/images/treelist.png';
import treeleastRight from '../../../assets/images/treelestright.png';
import {
  Container,
  CustomBtnNext,
  CustomBtnPrev,
  PartnersSection,
  StyledSwiper,
  TitlePartnersSwiper,
  WrapTilte,
} from './SwiperPartners.styled';
import { ArroLeftSwiper } from 'assets/icon/arroLeftSwiper';
import { SwiperSlide } from 'swiper/react';
import { ArroRightSwiper } from 'assets/icon/arroRightSwiper';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
export const SwiperPartners = () => {
  return (
    <PartnersSection>
      <Container>
        <WrapTilte>
          <img src={treeleast} alt="decorLeast" />
          <TitlePartnersSwiper>Партнери</TitlePartnersSwiper>
          <img src={treeleastRight} alt="decorLeast" />
        </WrapTilte>
        <StyledSwiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          nested={false}
        >
          <CustomBtnPrev className="swiper-button-prev">
            <ArroLeftSwiper />
          </CustomBtnPrev>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>

          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>

          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <CustomBtnNext className="swiper-button-next">
            <ArroRightSwiper />
          </CustomBtnNext>
        </StyledSwiper>
      </Container>
    </PartnersSection>
  );
};
