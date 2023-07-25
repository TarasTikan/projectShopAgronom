import {
  BtnBuy,
  BtnDelivery,
  BtnMinusAndPlus,
  BtnOrder,
  ContImg,
  ContainerModal,
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
import { useParams } from 'react-router-dom';
import { fetchProductOne } from 'redux/products/operations';
const ModalRoot = document.querySelector('#ModalRoot');
export function Modal({ imgModal, onClose }) {
  const { routesName, productId } = useParams();
  const [number, setNumber] = useState(1);
  const productOne = useSelector(selectProductOne);
  const dispatch = useDispatch();
  useEffect(() => {
    const routerInfo = {
      plants: routesName,
      id: productId,
    };
    dispatch(fetchProductOne(routerInfo));
  }, [routesName, productId, dispatch]);
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
      setNumber(prevState => prevState + 1);
    }

    if (name === 'minus') {
      number === 1 ? setNumber(1) : setNumber(prevState => prevState - 1);
    }
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
                  {(Number(productOne.price) * number).toLocaleString('en-US')}
                  грн
                </PriceProductModal>
                <TextPrice>Ціна за 5 л</TextPrice>
                <TitleProducerModal>Виробник</TitleProducerModal>
                <ProducerText>{productOne.producer}</ProducerText>
              </div>
            </WrapProductImg>
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
          </WrapProductBuy>
        </WrapInfoProduct>
        <WrapBtnOrder>
          <BtnDelivery type="button">Продовжити покупки</BtnDelivery>
          <BtnOrder type="button">Оформити заказ</BtnOrder>
        </WrapBtnOrder>
      </ContainerModal>
    </Overlay>,
    ModalRoot
  );
}
