import { SearchIcon } from "assets/icon/searchIcon";
import { BtnEmotions, CallBtn, Container, ImgLogo, InputSearch, ItemText, KatalogItem, ListBtn, ListKatalog, SearchBtn, StyledLink, TextCall, TextInfoCall, TextMoney, WrapCall, WrapSideBar } from "./HeadInfo.styled";
import { CallIcon } from "assets/icon/callIcon";
import { LoveIcon } from "assets/icon/loveIcon";
import { VesaIcon } from "assets/icon/vesaIcon";
import { ShopBascetIcon } from "assets/icon/shopBascetIcon";
import logo from '../../assets/Logo.png';
import { Seeds } from "assets/icon/seeds";
import { Sapling } from "assets/icon/sapling";
import { Fertilizer } from "assets/icon/fertilizer";
import { Farmer } from "assets/icon/farmer";
import { FeedGroup } from "assets/icon/feedGroup";
export const HeadInfo = () => {
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
              <BtnEmotions type="button">
                <ShopBascetIcon />
              </BtnEmotions>
            </li>
          </ListBtn>
          <TextMoney>0,0 грн</TextMoney>
        </WrapSideBar>
        <ListKatalog>
          <KatalogItem>
            <Seeds />
            <ItemText>Насіння</ItemText>
          </KatalogItem>
          <KatalogItem>
            <Sapling />
            <StyledLink to="/catalog/plantsProtect">
              Засоби захисту рослин
            </StyledLink>
          </KatalogItem>
          <KatalogItem>
            <Fertilizer />
            <ItemText>Добрива</ItemText>
          </KatalogItem>
          <KatalogItem>
            <FeedGroup />
            <ItemText>кормова група</ItemText>
          </KatalogItem>
          <KatalogItem>
            <Farmer />
            <ItemText>Агроному в поміч</ItemText>
          </KatalogItem>
        </ListKatalog>
      </Container>
    );
}