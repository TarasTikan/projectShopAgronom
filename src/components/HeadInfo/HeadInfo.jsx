import { SearchIcon } from 'assets/icon/searchIcon';
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
import { CallIcon } from 'assets/icon/callIcon';
import { LoveIcon } from 'assets/icon/loveIcon';
import { VesaIcon } from 'assets/icon/vesaIcon';
import { ShopBascetIcon } from 'assets/icon/shopBascetIcon';
import logo from '../../assets/images/Logo.png';
import { Sapling } from 'assets/icon/sapling';
import { Fertilizer } from 'assets/icon/fertilizer';
import { FeedGroupIcon } from 'assets/icon/feedGroup';
import { useSelector } from 'react-redux';
import { selectItemsBasket } from 'redux/basket/selectors';
import { useNavigate } from 'react-router-dom';
export const HeadInfo = () => {
  const basketProduct = useSelector(selectItemsBasket);
  const navigate = useNavigate();
  const handleSaveRouter = e => {
    localStorage.setItem('page', `${e.currentTarget.name}`);
  };
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
                <NumberBasket>{basketProduct.length}</NumberBasket>
              )}
              <ShopBascetIcon />
            </BtnEmotions>
          </li>
        </ListBtn>
        <TextMoney>0,0 грн</TextMoney>
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
