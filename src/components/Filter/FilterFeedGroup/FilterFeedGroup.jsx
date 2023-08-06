import { feedGroupAnimals, feedGroupBird, plantsProducer } from 'fakeAPI';
import { useDispatch } from 'react-redux';
import {
  FormPrice,
  FormProducer,
  LabalInput,
  ListCatalogName,
  PriceInput,
  PriceLabel,
  StyledLink,
  TextWrapInput,
  TitleFilter,
  TitlePrice,
  TitleProducer,
  WrapFilter,
  WrapInput,
  WrapTitleFilter,
} from './FilterFeedGroup.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  addPriceMax,
  addPriceMin,
  addProducer,
  deleteProducer,
} from 'redux/products/filterSlice';
import { Checkbox } from 'components/Checkbox/Checkbox';

export const FilterFeedGroup = () => {
  const { routesName } = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  useEffect(() => {
    switch (routesName) {
      case 'pigs':
      case 'cattles':
      case 'rabbits':
        return setCategory(feedGroupAnimals);
      case 'fishs':
        return;
      default:
        return setCategory(feedGroupBird);
    }
  }, [routesName]);
  const handleChangeProducer = e => {
    const { name, checked } = e.target;
    setCheckedItems(prev => ({ ...prev, [name]: checked }));
    const normalizatorFilter = name.slice(8, name.length).trim();
    const actionProducer = checked ? addProducer : deleteProducer;
    if (name.includes('producer')) {
      dispatch(actionProducer(normalizatorFilter));
    }
  };
  const handleChangePrice = e => {
    const targetInput = e.target.name;
    if (targetInput === 'min') {
      dispatch(
        addPriceMin(e.target.value !== '' ? Number(e.target.value) : null)
      );
    } else {
      dispatch(
        addPriceMax(e.target.value !== '' ? Number(e.target.value) : null)
      );
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
              <Checkbox
                checked={checkedItems[`producer ${name}`] || false}
                onChange={handleChangeProducer}
                name={`producer ${name}`}
              />
              {name}
            </LabalInput>
          ))}
        </FormProducer>
        <FormPrice>
          <TitlePrice>Ціна</TitlePrice>
          <WrapInput>
            <PriceLabel>
              От
              <PriceInput
                type="number"
                name="min"
                onChange={handleChangePrice}
              />
            </PriceLabel>
            <TextWrapInput>-</TextWrapInput>
            <PriceLabel>
              До
              <PriceInput
                type="number"
                name="max"
                onChange={handleChangePrice}
              />
            </PriceLabel>
          </WrapInput>
        </FormPrice>
      </WrapFilter>
    </WrapTitleFilter>
  );
};
