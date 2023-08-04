import {
  Container,
  ImgLogo,
  LogoContainer,
  LogoText,
  FooterSection,
  WrapInformation,
  TextInformation,
  TitleInformation,
  ContactText,
  ContactLink,
  CallBtn,
  ItemContact,
  FooterText,
  ContainerDecoration,
  WrapDecoration,
  WrapDecorationAll,
  ElementsDecoration,
} from './Footer.styled';
import logo from '../../assets/images/Logo.png';
import { CallIcon } from 'assets/icon/callIcon';
import { Email } from 'assets/icon/emailIcon';
import { ArrowWhite } from 'assets/icon/arrowWhite';
export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <LogoContainer>
          <li>
            <ImgLogo src={logo} alt="logo" width="158" height="71" />
          </li>
          <li>
            <LogoText>
              Пропонуємо покупцям широкий вибір насіння овочів
            </LogoText>
          </li>
        </LogoContainer>
        <WrapInformation>
          <li>
            <TitleInformation>Інформація</TitleInformation>
          </li>
          <li>
            <TextInformation>Про компанію</TextInformation>
          </li>
          <li>
            <TextInformation>Оплата і доставка</TextInformation>
          </li>
          <li>
            <TextInformation>Партнери</TextInformation>
          </li>
        </WrapInformation>
        <WrapInformation>
          <li>
            <TitleInformation>Товари</TitleInformation>
          </li>
          <li>
            <TextInformation>Каталог і продукції</TextInformation>
          </li>
          <li>
            <TextInformation>Засоби захисту рослин</TextInformation>
          </li>
          <li>
            <TextInformation>Насіння</TextInformation>
          </li>
          <li>
            <TextInformation>Добрива</TextInformation>
          </li>
          <li>
            <TextInformation>Агроному в поміч</TextInformation>
          </li>
        </WrapInformation>
        <WrapInformation>
          <li>
            <h3>Контакти</h3>
          </li>
          <ItemContact>
            <CallBtn type="botton">
              <CallIcon />
            </CallBtn>
            <div>
              <ContactText>+38 (067) 115 00 58</ContactText>
              <ContactLink>Замовити зворотній зв’язок</ContactLink>
            </div>
          </ItemContact>
          <ItemContact>
            <CallBtn type="button">
              <Email />
            </CallBtn>
            <ContactText>DAT@gmail.com</ContactText>
          </ItemContact>
        </WrapInformation>
      </Container>
      <WrapDecorationAll>
        <WrapDecoration>
          <ContainerDecoration />
          <FooterText> &#169; 2022 DAT</FooterText>
        </WrapDecoration>
        <ElementsDecoration>
          <ArrowWhite />
        </ElementsDecoration>
      </WrapDecorationAll>
    </FooterSection>
  );
};
