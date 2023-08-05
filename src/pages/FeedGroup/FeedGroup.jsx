import {
  CatalogItem,
  Container,
  ListCatalog,
  PlantsSection,
  StyledLink,
  TitleCatalog,
  WrapTextItem,
  WrapTitle,
} from './FeedGroup.styled';
import treelist from '../../assets/images/treelist.png';
import treeleastRight from '../../assets/images/treelestright.png';
import { feedGroupCatalog } from 'fakeAPI';
import { HeadInfo } from 'components/HeadInfo/HeadInfo';
import { InfoPlantsProtect } from 'components/InfoPlantsProtect/InfoPlantsProtect';
import { Footer } from 'components/Footer/Footer';
import { UrlList } from 'components/UrlList/UrlList';
import { BackToTopBtn } from 'components/BackToTopBtn/BackToTopBtn';
export const FeedGroup = () => {
  return (
    <>
      <main>
        <PlantsSection>
          <Container>
            <HeadInfo />
            <UrlList />
            <WrapTitle>
              <img src={treelist} alt="treelist" />
              <TitleCatalog>Кормова група</TitleCatalog>
              <img src={treeleastRight} alt="treelist" />
            </WrapTitle>
            <ListCatalog>
              {feedGroupCatalog.map(({ id, name, routesName, imgPL }) => (
                <CatalogItem key={id} imgpl={imgPL}>
                  <WrapTextItem>
                    <StyledLink to={`/feedGroup/filter/${routesName}`}>
                      {name}
                    </StyledLink>
                  </WrapTextItem>
                </CatalogItem>
              ))}
            </ListCatalog>
          </Container>
        </PlantsSection>
        <InfoPlantsProtect />
        <BackToTopBtn />
      </main>
      <Footer />
    </>
  );
};
