import {  SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container, CustomBtnContainer, CustomBtnNext, CustomBtnPrev, IteamStock, ItemInfo, ItemNumber, ItemPrice, ItemTitle, NewsSection, StyledSwiper } from './SwiperNews.styled';
import { ArroLeftSwiper } from 'assets/icon/arroLeftSwiper';
import { ArroRightSwiper } from 'assets/icon/arroRightSwiper';
export const SwiperNews = () => {
  return (
    <NewsSection>
      <Container>
        <CustomBtnContainer>
          <CustomBtnPrev >
            <ArroLeftSwiper />
          </CustomBtnPrev>
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
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
            <SwiperSlide>
              <ItemInfo>
                <div>
                  <ItemTitle>helo</ItemTitle>
                  <IteamStock>В наявності</IteamStock>
                </div>
                <div>
                  <ItemPrice>222 грн</ItemPrice>
                  <ItemNumber>22 шт</ItemNumber>
                </div>
              </ItemInfo>
            </SwiperSlide>
          </StyledSwiper>
          <CustomBtnNext >
            <ArroRightSwiper />
          </CustomBtnNext>
        </CustomBtnContainer>
      </Container>
    </NewsSection>
  );
};
