import aboutCompanyImage from '../../assets/images/aboutcompanyimg.png'
import { AboutButton, AboutInfo, AboutInfoSpan, AboutTitle, Container, HeadBigImgAbout, HeadImgAbout, HeroSection, ListAboutInfo, WrapTitle } from './AboutCompany.styled';
import treelist from '../../assets/images/treelist.png';
export const AboutCompany = () => {
    return (
      <HeroSection>
        <Container>
          <HeadBigImgAbout src={aboutCompanyImage} alt="aboutCompanyImage" />
          <div>
            <WrapTitle>
              <HeadImgAbout src={treelist} alt="decorTree" />
              <AboutTitle>Про нас</AboutTitle>
            </WrapTitle>
            <ListAboutInfo>
              <li>
                <AboutInfo>
                  <AboutInfoSpan>«Компанія ТОВ “ДАМАР АГРОТРЕЙД”</AboutInfoSpan>{' '}
                  — молода команда, яка з’явилась на аграрному ринку у 2020
                  році. Ми не боїмось труднощів і викликів. Тому навіть складний
                  ковідний період, світова пандемія не стали на заваді успішному
                  старту.
                </AboutInfo>
              </li>
              <li>
                <AboutInfo>
                  Отже,
                  <AboutInfoSpan>ми — сміливі, ми — драйвові</AboutInfoSpan>, ми
                  — ті, що розвивають рослинництво та допомагають ставати
                  успішними тисячам вітчизняних аграріїв.
                </AboutInfo>
              </li>
              <li>
                <AboutInfo>
                  <AboutInfoSpan>Бачення:</AboutInfoSpan> компанія ТОВ “ДАМАР
                  АГРОТРЕЙД” тримає курс на підвищення престижності, довіри до
                  засобів захисту рослин made in UA. Прагнемо, аби в кожному
                  регіоні України наш споживач мав доступ до якісної продукції
                  та консалтингу від фахівців команди.
                </AboutInfo>
              </li>
              <li>
                <AboutInfo>
                  <AboutInfoSpan>Місія:</AboutInfoSpan> усе продуктове
                  портфоліо, консультативні послуги ТОВ “ДАМАР АГРОТРЕЙД”
                  направлені на підвищення рентабельності рослинництва в
                  мінливих кліматичних умовах України. Також ставимо собі
                  завдання підвищувати обізнаність клієнтів щодо сучасних
                  методів ведення рослинництва...
                </AboutInfo>
              </li>
            </ListAboutInfo>
            <AboutButton type="button">Докладніше</AboutButton>
          </div>
        </Container>
      </HeroSection>
    );
}