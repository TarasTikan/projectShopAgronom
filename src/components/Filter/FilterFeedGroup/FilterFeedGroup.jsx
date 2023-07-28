import {
  feedGroupAnimals,
  feedGroupBird,
  plantsProducer,
} from 'fakeAPI';
import { useDispatch } from 'react-redux';
import {
  addCulture,
  addNumber,
  addProducer,
  deleteCulture,
  deleteNumber,
  deleteProducer,
} from 'redux/products/filterSlice';
import {
  FormProducer,
  LabalInput,
  ListCatalogName,
  StyledLink,
  TitleFilter,
  TitleProducer,
  WrapFilter,
  WrapTitleFilter,
} from './FilterFeedGroup.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const FilterFeedGroup = () => {
  const { routesName } = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    switch (routesName) {
      case 'animals':
        setCategory(feedGroupAnimals);
        break;
      case 'bird':
        setCategory(feedGroupBird);
        break;
      default:
        return;
    }
  }, [routesName, category]);
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
      {category.length !== 0 && (
        <ListCatalogName>
          {category.map(({ id, name, routesName }) => (
            <li key={id}>
              <StyledLink to={`filter/${routesName}`}>{name}</StyledLink>
            </li>
          ))}
        </ListCatalogName>
      )}
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
      </WrapFilter>
    </WrapTitleFilter>
  );
};
