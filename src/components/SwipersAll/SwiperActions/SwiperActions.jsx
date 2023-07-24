import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ArroLeftSwiper } from 'assets/icon/arroLeftSwiper';
import { ArroRightSwiper } from 'assets/icon/arroRightSwiper';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/products/selectors';
import { useEffect } from 'react';
import { fetchProducts } from 'redux/products/operations';
import treeleast from '../../../assets/images/treelist.png';
import treeleastRight from '../../../assets/images/treelestright.png';
import {
  ActionsButton,
  ActionsSection,
  Container,
  CustomBtnContainer,
  CustomBtnNext,
  CustomBtnPrev,
  IteamStock,
  ItemInfo,
  ItemNumber,
  ItemPrice,
  ItemTitle,
  StyledSwiper,
  TitleActionsSwiper,
  WrapTilte,
} from './SwiperActions.styled';
export const SwiperActions = () => {
  const dispatch = useDispatch();
  const productsNew = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchProducts('herbicides'));
  }, [dispatch]);
  return (
    <ActionsSection>
      <Container>
        <WrapTilte>
          <img src={treeleast} alt="decorLeast" />
          <TitleActionsSwiper>Акції</TitleActionsSwiper>
          <img src={treeleastRight} alt="decorLeast" />
        </WrapTilte>
        <CustomBtnContainer>
          <CustomBtnPrev className="swiper-button-prev">
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
            {productsNew.map(({ name, price, number, _id }) => (
              <SwiperSlide key={_id}>
                <ItemInfo>
                  <div>
                    <ItemTitle>{name}</ItemTitle>
                    <IteamStock>В наявності</IteamStock>
                  </div>
                  <div>
                    <ItemPrice>{price} грн</ItemPrice>
                    <ItemNumber>{number} шт</ItemNumber>
                  </div>
                </ItemInfo>
              </SwiperSlide>
            ))}
          </StyledSwiper>
          <CustomBtnNext className="swiper-button-next">
            <ArroRightSwiper />
          </CustomBtnNext>
        </CustomBtnContainer>
        <ActionsButton>Дивитися усі товари</ActionsButton>
      </Container>
    </ActionsSection>
  );
};
