import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = state => state.products.products.items;
export const selectProductOne = state => state.products.products.item;

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
    if (page === 'feedGroup') {
      if (
        filterProducer.length !== 0 &&
        priceMin !== null &&
        priceMax !== null
      ) {
        const minPrice = parseFloat(priceMin);
        const maxPrice = parseFloat(priceMax);
        return products.filter(
          ({ producer, price }) =>
            producer.includes(filterProducer[0]) &&
            Number(price) > minPrice &&
            Number(price) < maxPrice
        );
      } else if (filterProducer.length !== 0) {
        return products.filter(({ producer }) =>
          producer.includes(filterProducer[0])
        );
      } else if (priceMin !== null && priceMax !== null) {
        const minPrice = parseFloat(priceMin);
        const maxPrice = parseFloat(priceMax);
        return products.filter(
          ({ price }) => Number(price) > minPrice && Number(price) < maxPrice
        );
      }
      return products;
    }

    const normalizator = filterCulture.map(item =>
      item ? item.toUpperCase() : ''
    );

    const noFilter =
      filterProducer.length === 0 &&
      filterCulture.length === 0 &&
      filterNumber.length === 0;

    if (noFilter) {
      return products;
    } else if (filterProducer.length === 0 && filterCulture.length === 0) {
      return products.filter(({ number }) =>
        filterNumber.some(num => number === num)
      );
    } else if (filterProducer.length === 0) {
      return products.filter(({ culture }) =>
        normalizator.every(crop =>
          culture ? culture.toUpperCase().includes(crop) : false
        )
      );
    } else {
      const producerFilter = products
        .filter(({ producer }) => producer.includes(filterProducer[0]))
        .filter(({ culture }) =>
          normalizator.every(crop =>
            culture ? culture.toUpperCase().includes(crop) : false
          )
        );
      return producerFilter;
    }
  }
);
