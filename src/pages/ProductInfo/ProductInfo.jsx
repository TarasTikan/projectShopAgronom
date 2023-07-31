import { LoveIcon } from 'assets/icon/loveIcon';
import { VesaIcon } from 'assets/icon/vesaIcon';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductOne} from 'redux/products/operations';
import { selectProductOne} from 'redux/products/selectors';
import {
  BuyButton,
  Container,
  ContainerInfoProduct,
  DeliverButton,
  IconItem,
  ListIcon,
  PriceText,
  ProductBtnInfo,
  ProductSection,
  TextDelivery,
  TextDescripProduct,
  TextProducer,
  TextProductPrice,
  TextProductStock,
  TitleDelivery,
  TitlePrice,
  TitleProducer,
  TitleProduct,
  TitlteDescipProduct,
  WrapBtnInfo,
  WrapCardsBank,
  WrapContainerInfo,
  WrapDelivery,
  WrapDescrip,
  WrapInfoProduct,
  WrapIsStock,
  WrapPrice,
  WrapPriceInfo,
  WrapProducer,
  WrapTitle,
  Wrapimg,
} from './ProductInfo.styled';
import { SwiperYouLike } from 'components/SwipersAll/SwiperYouLike/SwiperYouLike';
import { Footer } from 'components/Footer/Footer';
import { Modal } from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import { ProductDescription } from 'components/ProductDescription/ProductDescription';
import { UrlList } from 'components/UrlList/UrlList';
export const ProductInfo = () => {
  const { routesName, productId,category } = useParams();
  const productOne = useSelector(selectProductOne);
  const [showInfo, setShowInfo] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const [page] = useState(localStorage.getItem('page'))
  const dispatch = useDispatch()
  useEffect(() => {
    const product = {
      plants: routesName,
      id: productId,
      page,
    };
    dispatch(fetchProductOne(product));
  }, [productId, routesName, dispatch, page, category]);
  const toggleModal = e => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <ProductSection>
        <Container>
          <HeadInfo />
          <UrlList productOne={productOne} />
          {productOne === null || productOne === undefined ? (
            <Loader />
          ) : (
            <>
              <WrapInfoProduct>
                <Wrapimg>adasdads</Wrapimg>
                <WrapContainerInfo>
                  <WrapTitle>
                    {/* <ImgDecoration src={treeleast} alt="decorLeast" /> */}
                    <TitleProduct>
                      {productOne.name},<br /> {productOne.producer}
                    </TitleProduct>
                  </WrapTitle>
                  <WrapIsStock>
                    <TextProductStock>В наявності</TextProductStock>
                    <TextProductPrice>
                      {Math.round(Number(productOne.price) / 5)} грн./л
                    </TextProductPrice>
                  </WrapIsStock>
                  <ContainerInfoProduct>
                    <WrapCardsBank>
                      <WrapProducer>
                        <TitleProducer>Виробник</TitleProducer>
                        <TextProducer>{productOne.producer}</TextProducer>
                      </WrapProducer>
                      <div>
                        <TitleProducer>Оплата</TitleProducer>
                      </div>
                    </WrapCardsBank>
                    <WrapDelivery>
                      <TitleDelivery>Доставка</TitleDelivery>
                      <TextDelivery>
                        Завтра відповідно до тарифів перевізника
                      </TextDelivery>
                      <DeliverButton type="button">
                        Замовити дзвінок
                      </DeliverButton>
                    </WrapDelivery>
                  </ContainerInfoProduct>
                  <WrapPriceInfo>
                    <WrapPrice>
                      <TitlePrice>
                        {productOne.price} грн
                      </TitlePrice>
                      <PriceText>Ціна за 5 л</PriceText>
                    </WrapPrice>
                    <BuyButton type="button" onClick={toggleModal}>
                      Купити
                    </BuyButton>
                    <ListIcon>
                      <IconItem>
                        <LoveIcon />
                      </IconItem>
                      <IconItem>
                        <VesaIcon />
                      </IconItem>
                    </ListIcon>
                  </WrapPriceInfo>
                </WrapContainerInfo>
              </WrapInfoProduct>
              <WrapDescrip>
                <div>
                  <ProductBtnInfo
                    type="button"
                    onClick={() => setShowInfo(!showInfo)}
                    $active={showInfo.toString()}
                  >
                    Опис
                  </ProductBtnInfo>
                  <ProductBtnInfo
                    type="button"
                    onClick={() => setShowInfo(!showInfo)}
                    $active={(!showInfo).toString()}
                  >
                    Відгуки
                  </ProductBtnInfo>
                </div>
                <WrapBtnInfo>
                  <TitlteDescipProduct>{productOne.name}</TitlteDescipProduct>
                  <TextDescripProduct>
                    {productOne.description}
                  </TextDescripProduct>
                  <ProductDescription productOne={productOne} />
                </WrapBtnInfo>
              </WrapDescrip>
            </>
          )}
          {isShowModal && <Modal onClose={toggleModal} />}
        </Container>
      </ProductSection>
      <SwiperYouLike />
      <Footer />
    </>
  );
};
