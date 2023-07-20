import {
  CatalogItem,
  Container,
  ListCatalog,
  PlantsSection,
  RoteteImg,
  StyledLink,
  TitleCatalog,
  UrlList,
  WrapTextItem,
  WrapTitle,
} from './PlantsProtect.styled';
import treelist from '../../assets/images/treelist.png';
import { plantsProtectCatalog } from 'fakeAPI';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
export const PlantsProtect = () => {
  const handleSaveRouter = (e) => {
localStorage.setItem('router', e.target.name);
  }
  return (
    <main>
      <PlantsSection>
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
          </UrlList>
          <WrapTitle>
            <img src={treelist} alt="treelist" />
            <TitleCatalog>Засоби захисту рослин</TitleCatalog>
            <RoteteImg src={treelist} alt="treelist" />
          </WrapTitle>
          <ListCatalog>
            {plantsProtectCatalog.map(({ id, name, routesName, imgPL }) => (
              <CatalogItem key={id} imgpl={imgPL}>
                <WrapTextItem>
                  <StyledLink
                    to={`/plantsProtect`}
                    name={routesName}
                    onClick={handleSaveRouter}
                  >
                    {name}
                  </StyledLink>
                </WrapTextItem>
              </CatalogItem>
            ))}
          </ListCatalog>
        </Container>
      </PlantsSection>
    </main>
  );
};
