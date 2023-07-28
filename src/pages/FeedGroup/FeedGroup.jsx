import {
  CatalogItem,
  Container,
  ListCatalog,
  PlantsSection,
  StyledLink,
  TitleCatalog,
  UrlList,
  WrapTextItem,
  WrapTitle,
} from './FeedGroup.styled';
import treelist from '../../assets/images/treelist.png';
import treeleastRight from '../../assets/images/treelestright.png';
import { feedGroupCatalog } from 'fakeAPI';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { InfoPlantsProtect } from 'components/InfoPlantsProtect/InfoPlantsProtect';
import { Footer } from 'components/Footer/Footer';
export const FeedGroup = () => {
  const handleSaveRouter = e => {
      localStorage.setItem('page', 'feedGroup');
  };
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
              <p>Кормова група</p>
            </li>
          </UrlList>
          <WrapTitle>
            <img src={treelist} alt="treelist" />
            <TitleCatalog>Кормова група</TitleCatalog>
            <img src={treeleastRight} alt="treelist" />
          </WrapTitle>
          <ListCatalog>
            {feedGroupCatalog.map(({ id, name, routesName, imgPL }) => (
              <CatalogItem key={id} imgpl={imgPL}>
                <WrapTextItem>
                  <StyledLink
                    to={`/feedGroup/filter/${routesName}`}
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
      <InfoPlantsProtect />
      <Footer />
    </main>
  );
};
