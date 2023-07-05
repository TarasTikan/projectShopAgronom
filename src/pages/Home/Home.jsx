import { HeadInfo } from "components/HeadInfo/HeadInfo";
import {BtnCompany, Container, HeroDescription, HeroSection,  HeroTextTitle,  TitleHeroSpan, WrapHeroText} from "./Home.styled";
export const Home = () => {
  return (
    <>
      <main>
        <HeroSection>
          <Container>
            <HeadInfo />
            <WrapHeroText>
              <HeroTextTitle>
                <TitleHeroSpan>Аграрний</TitleHeroSpan><br/>інтернет-магазин
              </HeroTextTitle>
              <HeroDescription>
                Основна сфера діяльності – дистрибуція насіння, засобів захисту
                рослин, мінеральних макро - та мікродобрив
              </HeroDescription>
              <BtnCompany>Про компанію</BtnCompany>
            </WrapHeroText>
          </Container>
        </HeroSection>
      </main>
    </>
  );
};
