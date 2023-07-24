import { LoveIcon } from 'assets/icon/loveIcon';
import treeleast from '../../assets/images/treelist.png';
import { VesaIcon } from 'assets/icon/vesaIcon';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductOne } from 'redux/products/operations';
import { selectProductOne } from 'redux/products/selectors';
import {
  BuyButton,
  Container,
  ContainerInfoProduct,
  DeliverButton,
  IconItem,
  ImgDecoration,
  ListIcon,
  PriceText,
  ProductSection,
  TextDelivery,
  TextProducer,
  TextProductPrice,
  TextProductStock,
  TitleDelivery,
  TitlePrice,
  TitleProducer,
  TitleProduct,
  UrlList,
  WrapCardsBank,
  WrapContainerInfo,
  WrapDelivery,
  WrapDescrip,
  WrapIcon,
  WrapInfoProduct,
  WrapIsStock,
  WrapPrice,
  WrapPriceInfo,
  WrapProducer,
  WrapTitle,
  Wrapimg,
} from './ProductInfo.styled';
export const ProductInfo = () => {
  const { routesName, productId } = useParams();
  const dispatch = useDispatch();
  const productOne = useSelector(selectProductOne);
  useEffect(() => {
    const routerInfo = {
      plants: routesName,
      id: productId,
    };
    dispatch(fetchProductOne(routerInfo));
  }, [routesName, productId, dispatch]);
  return (
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
              <TextProductPrice>грн./л</TextProductPrice>
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
                <DeliverButton type="button">Замовити дзвінок</DeliverButton>
              </WrapDelivery>
            </ContainerInfoProduct>
            <WrapPriceInfo>
              <WrapPrice>
                <TitlePrice>{productOne.price} грн</TitlePrice>
                <PriceText>Ціна за 5 л</PriceText>
              </WrapPrice>
              <BuyButton type="button">Купити</BuyButton>
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
            <button type="button">Опис</button>
            <button type="button">Відгуки</button>
          </div>
          <div>
            <div>
              <h2>Генерал на полі</h2>
              <p>{productOne.description}</p>
            </div>
            <ul>
              <li>
                <p>
                  <span>Діюча речовина:</span> {productOne.ActiveSubstance}
                </p>
              </li>
              <li>
                <p>
                  <span>Препаративна форма:</span> {productOne.PreparativeForm}
                </p>
              </li>
              <li>
                <p>
                  <span>Норма використання:</span>
                  {productOne.RateOfUser}
                </p>
              </li>
              <li>
                <p>
                  <span>Клас токсичності:</span> {productOne.ToxicityClass}
                </p>
              </li>
              <li>
                <p>
                  <span> Термін зберігання:</span> {productOne.StoragePeriod}
                </p>
              </li>
            </ul>
            <div>
              <h2>Характеристики:</h2>
              <p>{productOne.Characteristics}</p>
            </div>
            <div>
              <h2>Рекомендаціїї:</h2>
              <p>{productOne.Recommendations}</p>
            </div>
          </div>
        </WrapDescrip>
      </Container>
    </ProductSection>
  );
};
