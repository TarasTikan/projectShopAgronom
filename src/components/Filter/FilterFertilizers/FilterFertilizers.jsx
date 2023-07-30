import { fertilizersCatalog, fertilizersProducer } from 'fakeAPI';
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
} from './FilterFertilizers.styled';

import {
  addPriceMax,
  addPriceMin,
  addProducer,
  deleteProducer,
} from 'redux/products/filterSlice';

export const FilterFertilizers = () => {
  const dispatch = useDispatch();

  const handleChangeProducer = e => {
    const normalizatorFilter = e.target.name
      .slice(8, e.target.name.length)
      .trim();
    const actionProducer = e.target.checked ? addProducer : deleteProducer;
    if (e.target.name.includes('producer')) {
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
      <ListCatalogName>
        {fertilizersCatalog.map(({ id, name, routesName }) => (
          <li key={id}>
            <StyledLink to={`filter/${routesName}`}>{name}</StyledLink>
          </li>
        ))}
      </ListCatalogName>
      <WrapFilter>
        <TitleFilter>Фільтр</TitleFilter>
        <FormProducer>
          <TitleProducer>Виробник</TitleProducer>
          {fertilizersProducer.map(({ id, name }) => (
            <LabalInput key={id}>
              <input
                type="checkbox"
                name={`producer ${name}`}
                onChange={handleChangeProducer}
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
