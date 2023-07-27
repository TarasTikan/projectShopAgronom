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
  InfoList,
  ListIcon,
  PriceText,
  ProductBtnInfo,
  ProductSection,
  SpanTextProduct,
  TextDelivery,
  TextDescripProduct,
  TextProducer,
  TextProductDescript,
  TextProductPrice,
  TextProductStock,
  TitleDelivery,
  TitlePrice,
  TitleProducer,
  TitleProduct,
  TitlteDescipProduct,
  UrlList,
  WrapBtnInfo,
  WrapCardsBank,
  WrapCharachtersInfo,
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
export const ProductInfo = () => {
  const { routesName, productId } = useParams();
  const productOne = useSelector(selectProductOne);
  const [showInfo, setShowInfo] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    const product = {
      plants: routesName,
      id: productId,
    };
    dispatch(fetchProductOne(product));
  }, [productId, routesName, dispatch]);
  const toggleModal = e => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <ProductSection>
        <Container>
          <HeadInfo />
          <UrlList>
            <li>
              <p>Головна</p>
            </li>
            <li>
              <p>Каталог</p>
            </li>
            <li>
              <p>Засоби захисту рослин</p>
            </li>
            <li>
              <p>Гербіциди</p>
            </li>
            <li>
              <p>Комманд</p>
            </li>
          </UrlList>
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
                        {productOne.price}
                        грн
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
                  <InfoList>
                    <li>
                      <TextProductDescript>
                        <SpanTextProduct>Діюча речовина:</SpanTextProduct>
                        {productOne.ActiveSubstance}
                      </TextProductDescript>
                    </li>
                    <li>
                      <TextProductDescript>
                        <SpanTextProduct>Препаративна форма:</SpanTextProduct>
                        {productOne.PreparativeForm}
                      </TextProductDescript>
                    </li>
                    <li>
                      <TextProductDescript>
                        <SpanTextProduct>Норма використання: </SpanTextProduct>
                        {productOne.RateOfUser}
                      </TextProductDescript>
                    </li>
                    <li>
                      <TextProductDescript>
                        <SpanTextProduct>Клас токсичності:</SpanTextProduct>
                        {productOne.ToxicityClass}
                      </TextProductDescript>
                    </li>
                    <li>
                      <TextProductDescript>
                        <SpanTextProduct> Термін зберігання:</SpanTextProduct>
                        {productOne.StoragePeriod}
                      </TextProductDescript>
                    </li>
                  </InfoList>
                  <WrapCharachtersInfo>
                    <TitlteDescipProduct>Характеристики:</TitlteDescipProduct>
                    <TextProductDescript>
                      {productOne.Characteristics}
                    </TextProductDescript>
                  </WrapCharachtersInfo>
                  <div>
                    <TitlteDescipProduct>Рекомендаціїї:</TitlteDescipProduct>
                    <TextProductDescript>
                      {productOne.Recommendations}
                    </TextProductDescript>
                  </div>
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
