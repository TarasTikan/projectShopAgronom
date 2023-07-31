import { useState } from 'react';
import {
  InfoList,
  SpanTextProduct,
  TextProductDescript,
  TitlteDescipProduct,
  WrapCharachtersInfo,
} from './ProductDescription.styled';

export const ProductDescription = ({ productOne }) => {
  const [page] = useState(localStorage.getItem('page'));
  if (page === 'plantsProtect') {
    return (
      <>
        <InfoList>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Діюча речовина: </SpanTextProduct>
              {productOne.activeSubstance}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Препаративна форма: </SpanTextProduct>
              {productOne.preparativeForm}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Норма використання: </SpanTextProduct>
              {productOne.rateOfUser}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Клас токсичності: </SpanTextProduct>
              {productOne.toxicityClass}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct> Термін зберігання: </SpanTextProduct>
              {productOne.storagePeriod}
            </TextProductDescript>
          </li>
        </InfoList>
        <WrapCharachtersInfo>
          <TitlteDescipProduct>Характеристики: </TitlteDescipProduct>
          <TextProductDescript>
            {productOne.characteristics}
          </TextProductDescript>
        </WrapCharachtersInfo>
        <div>
          <TitlteDescipProduct>Рекомендаціїї: </TitlteDescipProduct>
          <TextProductDescript>
            {productOne.recommendations}
          </TextProductDescript>
        </div>
      </>
    );
  } else if (page === 'fertilizers') {
    return (
      <>
        <InfoList>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Сумісність: </SpanTextProduct>
              {productOne.compatibility}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Механізм дії: </SpanTextProduct>
              {productOne.mechanismAction}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Спектр дії: </SpanTextProduct>
              {productOne.spectrumAction}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Токсичність: </SpanTextProduct>
              {productOne.toxicity}
            </TextProductDescript>
          </li>
        </InfoList>
        <WrapCharachtersInfo>
          <TitlteDescipProduct>Характеристики: </TitlteDescipProduct>
          <TextProductDescript>
            {productOne.characteristics || productOne.сharacteristics}
          </TextProductDescript>
        </WrapCharachtersInfo>
      </>
    );
  } else {
    return (
      <>
        <InfoList>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Цільова група: </SpanTextProduct>
              {productOne.targetGroup}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Тип: </SpanTextProduct>
              {productOne.type}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Виробник: </SpanTextProduct>
              {productOne.producer}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct>Склад: </SpanTextProduct>
              {productOne.storage}
            </TextProductDescript>
          </li>
          <li>
            <TextProductDescript>
              <SpanTextProduct> Пакування: </SpanTextProduct>
              {productOne.packaging}
            </TextProductDescript>
          </li>
        </InfoList>
        <WrapCharachtersInfo>
          <TitlteDescipProduct>Характеристики: </TitlteDescipProduct>
          <TextProductDescript>
            {productOne.characteristics}
          </TextProductDescript>
        </WrapCharachtersInfo>
      </>
    );
  }
};
