import { plantsCulture, plantsProducer, plantsProtectCatalog } from "fakeAPI";
import { useDispatch } from "react-redux";
import { addCulture, addNumber, addProducer, deleteCulture, deleteNumber, deleteProducer } from "redux/products/filterSlice";
import { FormProducer, LabalInput, ListCatalogName, StyledLink, TitleCulture, TitleFilter, TitleProducer, WrapFilter, WrapTitleFilter } from "./FilterPlantsProtect.styled";

export const FilterPlantsProtect = () => {
    const dispatch = useDispatch()
      const handleChange = e => {
    const normalizatorFilter = e.target.name
      .slice(8, e.target.name.length)
      .trim();
    const actionProducer = e.target.checked ? addProducer : deleteProducer;
    const actionCulture = e.target.checked ? addCulture : deleteCulture;
    const actionNumber = e.target.checked ? addNumber : deleteNumber;
    if (e.target.name.includes('producer')) {
      dispatch(actionProducer(normalizatorFilter));
    } else if (e.target.name.includes('culture')) {
      dispatch(actionCulture(normalizatorFilter));
    } else {
      dispatch(actionNumber(e.target.name));
    }
  };
    return (
      <WrapTitleFilter>
        <ListCatalogName>
          {plantsProtectCatalog.map(({ id, name, routesName }) => (
            <li key={id}>
              <StyledLink to={`filter/${routesName}`}>{name}</StyledLink>
            </li>
          ))}
        </ListCatalogName>
        <WrapFilter>
          <TitleFilter>Фільтр</TitleFilter>
          <FormProducer>
            <TitleProducer>Виробник</TitleProducer>
            {plantsProducer.map(({ id, name }) => (
              <LabalInput key={id}>
                <input
                  type="checkbox"
                  name={`producer ${name}`}
                  onChange={handleChange}
                />
                {name}
              </LabalInput>
            ))}
          </FormProducer>
          <FormProducer>
            <TitleCulture>Культура</TitleCulture>
            {plantsCulture.map(({ id, name }) => (
              <LabalInput key={id}>
                <input
                  type="checkbox"
                  name={`culture ${name}`}
                  onChange={handleChange}
                />
                {name}
              </LabalInput>
            ))}
          </FormProducer>
          <FormProducer>
            <TitleProducer>Кількість</TitleProducer>
            <LabalInput>
              <input
                type="checkbox"
                name="1"
                value="1"
                onChange={handleChange}
              />
              1
            </LabalInput>
            <LabalInput>
              <input
                type="checkbox"
                name="2"
                value="2"
                onChange={handleChange}
              />
              2
            </LabalInput>
            <LabalInput>
              <input
                type="checkbox"
                name="3"
                value="3"
                onChange={handleChange}
              />
              3
            </LabalInput>
            <LabalInput>
              <input
                type="checkbox"
                name="4"
                value="4"
                onChange={handleChange}
              />
              4
            </LabalInput>
            <LabalInput>
              <input
                type="checkbox"
                name="5"
                value="5"
                onChange={handleChange}
              />
              5
            </LabalInput>
            <LabalInput>
              <input
                type="checkbox"
                name="6"
                value="6"
                onChange={handleChange}
              />
              6
            </LabalInput>
          </FormProducer>
        </WrapFilter>
      </WrapTitleFilter>
    );
}