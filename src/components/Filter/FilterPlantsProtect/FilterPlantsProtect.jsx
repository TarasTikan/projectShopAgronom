import { plantsCulture, plantsProducer, plantsProtectCatalog } from 'fakeAPI';
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
  FormNumber,
  FormProducer,
  LabalInput,
  ListCatalogName,
  StyledLink,
  TitleCulture,
  TitleFilter,
  TitleNumber,
  TitleProducer,
  WrapFilter,
  WrapTitleFilter,
} from './FilterPlantsProtect.styled';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { useState } from 'react';

export const FilterPlantsProtect = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const handleChange = e => {
    const { name, checked } = e.target;
    setCheckedItems(prev => ({ ...prev, [name]: checked }));

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
        <FormNumber>
          <TitleNumber>Кількість</TitleNumber>
          <LabalInput>
            <Checkbox
              checked={checkedItems[`1`] || false}
              onChange={handleChange}
              name="1"
            />
            1
          </LabalInput>
          <LabalInput>
            <Checkbox
              checked={checkedItems[`2`] || false}
              onChange={handleChange}
              name="2"
            />
            2
          </LabalInput>
          <LabalInput>
            <Checkbox
              checked={checkedItems[`3`] || false}
              onChange={handleChange}
              name="3"
            />
            3
          </LabalInput>
          <LabalInput>
            <Checkbox
              checked={checkedItems[`4`] || false}
              onChange={handleChange}
              name="4"
            />
            4
          </LabalInput>
          <LabalInput>
            <Checkbox
              checked={checkedItems[`5`] || false}
              onChange={handleChange}
              name="5"
            />
            5
          </LabalInput>
          <LabalInput>
            <Checkbox
              checked={checkedItems[`6`] || false}
              onChange={handleChange}
              name="6"
            />
            6
          </LabalInput>
        </FormNumber>
      </WrapFilter>
    </WrapTitleFilter>
  );
};
// <Checkbox
//   checked={isChecked}
//   onChange={handleChange}
//   name={`culture ${name}`}
// />;
