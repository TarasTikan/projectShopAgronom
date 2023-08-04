import {
  BtnBuy,
  BtnDelivery,
  BtnMinusAndPlus,
  BtnOrder,
  ContImg,
  ContainerModal,
  ErrorText,
  ImgDecor,
  NumberContainer,
  Overlay,
  PriceProductModal,
  ProducerText,
  TextPrice,
  TitleModal,
  TitleModel,
  TitleNumber,
  TitleProducerModal,
  WrapBtnOrder,
  WrapInfoProduct,
  WrapNumber,
  WrapNumberText,
  WrapProductBuy,
  WrapProductImg,
  WrapTitle,
} from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import treeleastLeft from '../../assets/images/treelist.png';
import treeleastRight from '../../assets/images/treelestright.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductOne } from 'redux/products/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { addProductBacket } from 'redux/basket/operations';
import useTotalPrice from 'hooks/useTotalPrice';
const ModalRoot = document.querySelector('#ModalRoot');
export function Modal({ onClose }) {
  const { routesName } = useParams();
  const [number, setNumber] = useState(1);
  const [errorNumber, setErrorNumber] = useState(false);
  const navigate = useNavigate();
  const productOne = useSelector(selectProductOne);
  const dispatch = useDispatch();
  const totalPrice = useTotalPrice(productOne, number);
  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });
  const keyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  const hundlePlusAndMinus = e => {
    const name = e.target.name;
    if (name === 'plus') {
      Number(productOne.number) === number
        ? setErrorNumber(true)
        : setNumber(prevState => prevState + 1);
    }

    if (name === 'minus') {
      setErrorNumber(false);
      number === 1 ? setNumber(1) : setNumber(prevState => prevState - 1);
    }
  };

  const handleOrderProduct = () => {
    const { _id, updatedAt, createdAt, ...productInBasket } = {
      ...productOne,
      price: String(totalPrice),
      number: String(number),
    };
    console.log(productInBasket);
    dispatch(addProductBacket(productInBasket));
    localStorage.setItem('page', 'basketProducts');
  };
  return createPortal(
    <Overlay onClick={onOverlayClose}>
      <ContainerModal>
        <WrapTitle>
          <ImgDecor src={treeleastLeft} alt="decorLeast" />
          <TitleModal>Кошик</TitleModal>
          <ImgDecor src={treeleastRight} alt="decorLeast" />
        </WrapTitle>
        <WrapInfoProduct>
          <TitleModel>
            {productOne.name}, {productOne.producer}
          </TitleModel>
          <WrapProductBuy>
            <WrapProductImg>
              <ContImg />
              <div>
                <PriceProductModal>
                  {totalPrice.toLocaleString('en-US')} грн
                </PriceProductModal>
                <TextPrice>Ціна за 5 л</TextPrice>
                <TitleProducerModal>Виробник</TitleProducerModal>
                <ProducerText>{productOne.producer}</ProducerText>
              </div>
            </WrapProductImg>
            <WrapNumberText>
              <div>
                <BtnBuy type="button">Канистра 5 л</BtnBuy>
                <WrapNumber>
                  <TitleNumber>Кількість</TitleNumber>
                  <BtnMinusAndPlus
                    type="button"
                    name="minus"
                    onClick={hundlePlusAndMinus}
                  >
                    -
                  </BtnMinusAndPlus>
                  <NumberContainer>{number}</NumberContainer>
                  <BtnMinusAndPlus
                    type="button"
                    name="plus"
                    onClick={hundlePlusAndMinus}
                  >
                    +
                  </BtnMinusAndPlus>
                </WrapNumber>
              </div>
              {errorNumber && (
                <ErrorText>Максимальне колічество продуктів</ErrorText>
              )}
            </WrapNumberText>
          </WrapProductBuy>
        </WrapInfoProduct>
        <WrapBtnOrder>
          <BtnDelivery
            type="button"
            onClick={() => {
              navigate(`/plantsProtect/filter/${routesName}`);
              handleOrderProduct();
              onClose();
            }}
          >
            Продовжити покупки
          </BtnDelivery>
          <BtnOrder type="button" onClick={()=>{handleOrderProduct();navigate('/basketProducts');}}>
            Оформити заказ
          </BtnOrder>
        </WrapBtnOrder>
      </ContainerModal>
    </Overlay>,
    ModalRoot
  );
}
