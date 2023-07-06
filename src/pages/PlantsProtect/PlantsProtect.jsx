import { HeadInfo } from "components/HeadInfo/HeadInfo";
import { CatalogItem, Container, ListCatalog, PlantsSection, RoteteImg, TitleCatalog, UrlList, WrapTextItem, WrapTitle } from "./PlantsProtect.styled";
import treelist from "../../assets/treelist.png"
export const PlantsProtect = () => {
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
              <CatalogItem>
                <WrapTextItem>
                  <p>Гербіциди</p>
                </WrapTextItem>
              </CatalogItem>
              <CatalogItem>
                <WrapTextItem>
                  <p>Фунгіциди</p>
                </WrapTextItem>
              </CatalogItem>
              <CatalogItem>
                <WrapTextItem>
                  <p>Інсектициди</p>
                </WrapTextItem>
              </CatalogItem>
              <CatalogItem>
                <WrapTextItem>
                  <p>Десиканти</p>
                </WrapTextItem>
              </CatalogItem>
              <CatalogItem>
                <WrapTextItem>
                  <p>Протруювачі</p>
                </WrapTextItem>
              </CatalogItem>
              <CatalogItem>
                <WrapTextItem>
                  <p>Родентициди</p>
                </WrapTextItem>
              </CatalogItem>
              <CatalogItem>
                <WrapTextItem>
                  <p>Ретарданти</p>
                </WrapTextItem>
              </CatalogItem>
              <CatalogItem>
                <WrapTextItem>
                  <p>Ад’юванти</p>
                </WrapTextItem>
              </CatalogItem>
            </ListCatalog>
          </Container>
        </PlantsSection>
      </main>
    );
}