import {
  CatalogItem,
  Container,
  ListCatalog,
  PlantsSection,
  RoteteImg,
  TitleCatalog,
  UrlList,
  WrapTextItem,
  WrapTitle,
} from './PlantsProtect.styled';
import treelist from '../../assets/treelist.png';
import { plantsProtectCatalog } from 'fakeAPI';
import { NavLink } from 'react-router-dom';
export const PlantsProtect = () => {
  return (
    <main>
      <PlantsSection>
        <Container>
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
            {plantsProtectCatalog.map(({ id, name, routesName }) => (
              <CatalogItem key={id}>
                <WrapTextItem>
                  <NavLink to={`/filter/plantsProtect/${routesName}`}>
                    {name}
                  </NavLink>
                </WrapTextItem>
              </CatalogItem>
            ))}
          </ListCatalog>
        </Container>
      </PlantsSection>
    </main>
  );
};
