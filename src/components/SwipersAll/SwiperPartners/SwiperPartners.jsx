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
import { selectIsLoading } from 'redux/products/selectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
export const SwiperPartners = () => {
    const isLoading = useSelector(selectIsLoading);
  return (
    <PartnersSection>
      <Container>
        <WrapTilte>
          <img src={treeleast} alt="decorLeast" />
          <TitlePartnersSwiper>Партнери</TitlePartnersSwiper>
          <img src={treeleastRight} alt="decorLeast" />
        </WrapTilte>
        {isLoading ?  <Loader/> :
        <StyledSwiper
          id="swiper1"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: '.swiper-button-prev1',
            nextEl: '.swiper-button-next2',
          }}
          pagination={{ clickable: true }}
        >
          <CustomBtnPrev className="swiper-button-prev1">
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
          <CustomBtnNext className="swiper-button-next2">
            <ArroRightSwiper />
          </CustomBtnNext>
        </StyledSwiper>
        }

      </Container>
    </PartnersSection>
  );
};
