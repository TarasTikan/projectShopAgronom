import {
  fertilizersCatalog,
  fertilizersProducer,
  plantsCulture,
} from 'fakeAPI';
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
  TitleCulture,
  TitleFilter,
  TitlePrice,
  TitleProducer,
  WrapFilter,
  WrapInput,
  WrapTitleFilter,
} from './FilterFertilizers.styled';

import {
  addCulture,
  addPriceMax,
  addPriceMin,
  addProducer,
  deleteCulture,
  deleteProducer,
} from 'redux/products/filterSlice';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { useState } from 'react';

export const FilterFertilizers = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = e => {
    const { name, checked } = e.target;
    setCheckedItems(prev => ({ ...prev, [name]: checked }));
    const normalizatorFilter = name.slice(8, name.length).trim();
    const actionProducer = checked ? addProducer : deleteProducer;
    const actionCulture = checked ? addCulture : deleteCulture;
    if (name.includes('producer')) {
      dispatch(actionProducer(normalizatorFilter));
    } else {
      dispatch(actionCulture(normalizatorFilter));
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
              <Checkbox
                checked={checkedItems[`producer ${name}`] || false}
                onChange={handleChange}
                name={`producer ${name}`}
              />
              {name}
            </LabalInput>
          ))}
        </FormProducer>
        <FormProducer>
          <TitleCulture>Культура</TitleCulture>
          {plantsCulture.map(({ id, name }) => (
            <LabalInput key={id}>
              <Checkbox
                checked={checkedItems[`culture ${name}`] || false}
                onChange={handleChange}
                name={`culture ${name}`}
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
