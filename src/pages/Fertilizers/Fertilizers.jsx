import {
  CatalogItem,
  Container,
  ListCatalog,
  PlantsSection,
  StyledLink,
  TitleCatalog,
  WrapTextItem,
  WrapTitle,
} from './Fertilizers.styled';
import treelist from '../../assets/images/treelist.png';
import treeleastRight from '../../assets/images/treelestright.png';
import { fertilizersCatalog } from 'fakeAPI';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { InfoPlantsProtect } from 'components/InfoPlantsProtect/InfoPlantsProtect';
import { Footer } from 'components/Footer/Footer';
import { UrlList } from 'components/UrlList/UrlList';
export const Fertilizers = () => {

  return (
    <main>
      <PlantsSection>
        <Container>
          <HeadInfo />
          <UrlList />
          <WrapTitle>
            <img src={treelist} alt="treelist" />
            <TitleCatalog>Добрива</TitleCatalog>
            <img src={treeleastRight} alt="treelist" />
          </WrapTitle>
          <ListCatalog>
            {fertilizersCatalog.map(({ id, name, routesName, imgPL }) => (
              <CatalogItem key={id} imgpl={imgPL}>
                <WrapTextItem>
                  <StyledLink to={`/fertilizers/filter/${routesName}`}>
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
