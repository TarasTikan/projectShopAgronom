import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.products.items;
export const selectProductOne = state => state.products.products.item;
export const selectIsLoading = state => state.products.products.isLoading;
export const selectIsError = state => state.products.products.error;

export const selectFilterProducer = state => state.filter.filterProducer;
export const selectFilterCulture = state => state.filter.filterCulture;
export const selectFilterNumber = state => state.filter.filterNumber;

export const selectPriceMin = state => state.filter.filterPriceMin;
export const selectPriceMax = state => state.filter.filterPriceMax;

export const selectFilteredProducts = createSelector(
  [
    selectFilterProducer,
    selectFilterCulture,
    selectFilterNumber,
    selectProducts,
    selectPriceMin,
    selectPriceMax,
  ],
  (
    filterProducer,
    filterCulture,
    filterNumber,
    products,
    priceMin,
    priceMax
  ) => {
    const page = localStorage.getItem('page');
    const normalizator = filterCulture.map(item =>
      item ? item.toUpperCase() : ''
    );
    const minPrice = parseFloat(priceMin);
    const maxPrice = parseFloat(priceMax);

    const filterByProducer = product =>
      filterProducer.length === 0 ||
      product.producer.includes(filterProducer[0]);

    const filterByCulture = product =>
      filterCulture.length === 0 ||
      normalizator.every(crop =>
        product.culture ? product.culture.toUpperCase().includes(crop) : false
      );

    const filterByPrice = product =>
      (priceMin === null || Number(product.price) > minPrice) &&
      (priceMax === null || Number(product.price) < maxPrice);

    const filterByNumber = product =>
      filterNumber.length === 0 || filterNumber.includes(product.number);

    if (page === 'fertilizers') {
      return products.filter(
        product =>
          filterByProducer(product) &&
          filterByCulture(product) &&
          filterByPrice(product)
      );
    } else if (page === 'feedGroup') {
      return products.filter(
        product => filterByProducer(product) && filterByPrice(product)
      );
    } else {
      return products.filter(
        product =>
          filterByProducer(product) &&
          filterByCulture(product) &&
          filterByNumber(product)
      );
    }
  }
);
