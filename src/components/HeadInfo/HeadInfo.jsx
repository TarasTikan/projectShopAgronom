import { SearchIcon } from 'assets/icons/searchIcon';
import {
  BtnEmotions,
  CallBtn,
  Container,
  ImgLogo,
  InputSearch,
  KatalogItem,
  ListBtn,
  ListKatalog,
  NumberBasket,
  SearchBtn,
  StyledLink,
  TextCall,
  TextInfoCall,
  TextMoney,
  WrapCall,
  WrapSideBar,
} from './HeadInfo.styled';
import { CallIcon } from 'assets/icons/callIcon';
import { LoveIcon } from 'assets/icons/loveIcon';
import { VesaIcon } from 'assets/icons/vesaIcon';
import { ShopBascetIcon } from 'assets/icons/shopBascetIcon';
import logo from '../../assets/images/Logo.png';
import { Sapling } from 'assets/icons/sapling';
import { Fertilizer } from 'assets/icons/fertilizer';
import { FeedGroupIcon } from 'assets/icons/feedGroup';
import { useSelector } from 'react-redux';
import { selectItemsBasket } from 'redux/basket/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
export const HeadInfo = () => {
  const basketProduct = useSelector(selectItemsBasket);
  const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
      const [totalProducts, setTotalProducts] = useState(0);
  const handleSaveRouter = e => {
    localStorage.setItem('page', `${e.currentTarget.name}`);
  };
    useEffect(() => {
      setTotalPrice(
        basketProduct.reduce((total, { price }) => {
          return total + Number(price);
        }, 0)
      );
      setTotalProducts(
        basketProduct.reduce((total, { number }) => {
          return total + Number(number);
        }, 0)
      );
    }, [basketProduct]);
  return (
    <Container>
      <WrapSideBar>
        <ImgLogo src={logo} alt="logo" width="158" height="71" />
        <form>
          <InputSearch type="text" placeholder="Поиск" />
          <SearchBtn type="submit">
            <SearchIcon />
          </SearchBtn>
        </form>
        <WrapCall>
          <CallBtn type="botton">
            <CallIcon />
          </CallBtn>
          <div>
            <TextCall>+38 (067) 115 00 58</TextCall>
            <TextInfoCall>Замовити зворотній зв’язок</TextInfoCall>
          </div>
        </WrapCall>
        <ListBtn>
          <li>
            <BtnEmotions type="button">
              <LoveIcon />
            </BtnEmotions>
          </li>
          <li>
            <BtnEmotions type="button">
              <VesaIcon />
            </BtnEmotions>
          </li>
          <li>
            <BtnEmotions
              type="button"
              onClick={() => navigate('/basketProducts')}
            >
              {basketProduct.length !== 0 && (
                <NumberBasket>{totalProducts}</NumberBasket>
              )}
              <ShopBascetIcon />
            </BtnEmotions>
          </li>
        </ListBtn>
        <TextMoney>{totalPrice.toLocaleString('en-US')} грн</TextMoney>
      </WrapSideBar>
      <ListKatalog>
        <KatalogItem>
          <Sapling />
          <StyledLink
            to="/catalog/plantsProtect"
            onClick={handleSaveRouter}
            name="plantsProtect"
          >
            ЗАСОБИ ЗАХИСТУ РОСЛИН
          </StyledLink>
        </KatalogItem>
        <KatalogItem>
          <Fertilizer />
          <StyledLink
            to="/catalog/fertilizers"
            onClick={handleSaveRouter}
            name="fertilizers"
          >
            ДОБРИВА
          </StyledLink>
        </KatalogItem>
        <KatalogItem>
          <FeedGroupIcon />
          <StyledLink
            to="/catalog/feedGroup"
            onClick={handleSaveRouter}
            name="feedGroup"
          >
            КОРМОВА ГРУПА
          </StyledLink>
        </KatalogItem>
      </ListKatalog>
    </Container>
  );
};
