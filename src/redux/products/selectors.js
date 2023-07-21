import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = state => state.products.products.items;

export const selectFilterProducer = state => state.filter.filterProducer;
export const selectFilterCulture = state => state.filter.filterCulture;
export const selectFilterNumber = state => state.filter.filterNumber;


export const selectFilteredProducts = createSelector(
  [
    selectFilterProducer,
    selectFilterCulture,
    selectFilterNumber,
    selectProducts,
  ],
  (filterProducer, filterCulture, filterNumber, products) => {
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
      const producerFilter = products.filter(({ producer }) =>
        producer.includes(filterProducer[0])
      );
      const cultureFilter = producerFilter.filter(({ culture }) =>
        normalizator.every(crop =>
          culture ? culture.toUpperCase().includes(crop) : false
        )
      );
      return cultureFilter;
    }
  }
);
