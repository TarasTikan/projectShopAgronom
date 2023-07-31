import {
  CatalogItem,
  Container,
  ListCatalog,
  PlantsSection,
  StyledLink,
  TitleCatalog,
  WrapTextItem,
  WrapTitle,
} from './PlantsProtect.styled';
import treelist from '../../assets/images/treelist.png';
import treeleastRight from '../../assets/images/treelestright.png';
import { plantsProtectCatalog } from 'fakeAPI';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { InfoPlantsProtect } from 'components/InfoPlantsProtect/InfoPlantsProtect';
import { Footer } from 'components/Footer/Footer';
import { UrlList } from 'components/UrlList/UrlList';
export const PlantsProtect = () => {

  return (
    <main>
      <PlantsSection>
        <Container>
          <HeadInfo />
          <UrlList/>
          <WrapTitle>
            <img src={treelist} alt="treelist" />
            <TitleCatalog>Засоби захисту рослин</TitleCatalog>
            <img src={treeleastRight} alt="treelist" />
          </WrapTitle>
          <ListCatalog>
            {plantsProtectCatalog.map(({ id, name, routesName, imgPL }) => (
              <CatalogItem key={id} imgpl={imgPL}>
                <WrapTextItem>
                  <StyledLink
                    to={`/plantsProtect/filter/${routesName}`}
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
