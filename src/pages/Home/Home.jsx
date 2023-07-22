import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import {
  BtnCompany,
  Container,
  HeroDescription,
  HeroSection,
  HeroTextTitle,
  MainConent,
  MainImageDecor,
  TitleHeroSpan,
  WrapHeroText,
} from './Home.styled';
import mainImageDecor from '../../assets/images/mainIMageDecor.jpg'
import { AboutCompany } from 'components/AboutCompany/AboutCompany';
import { SwiperNews } from 'components/SwiperNews/SwiperNews';
export const Home = () => {
  return (
    <>
      <main>
        <HeroSection>
          <Container>
            <HeadInfo />
            <MainConent>
              <WrapHeroText>
                <HeroTextTitle>
                  <TitleHeroSpan>Аграрний</TitleHeroSpan>
                  <br />
                  інтернет-магазин
                </HeroTextTitle>
                <HeroDescription>
                  Основна сфера діяльності – дистрибуція насіння, засобів
                  захисту рослин, мінеральних макро - та мікродобрив
                </HeroDescription>
                <BtnCompany>Про компанію</BtnCompany>
              </WrapHeroText>
              <MainImageDecor src={mainImageDecor} alt="man take apple" />
            </MainConent>
          </Container>
        </HeroSection>
        <AboutCompany/>
        <SwiperNews/>
      </main>
    </>
  );
};
